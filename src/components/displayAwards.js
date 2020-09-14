import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Grid, Paper, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,

    backgroundColor: "gold",
  },
  image: {
    width: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
  content: {
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
}))

const DisplayAwards = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      allStrapiAwards {
        nodes {
          strapiId
          title
          description
        }
      }
      plant: file(relativePath: { eq: "plant.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Paper elevation={0} className={classes.root} square>
      <Grid container direction="column" justify="center" alignItems="center">
        <Box>
          <Typography variant="h4">My Achievement</Typography>
          <Typography variant="body1">striving to be better....</Typography>
        </Box>
        <Box>
          <Grid container justify="space-around" alignItems="center">
            <Box className={classes.image}>
              <Img fluid={data.plant.childImageSharp.fluid} />
            </Box>
            <Box>
              {data.allStrapiAwards.nodes.map(item => {
                return (
                  <Box id={item.strapiId} className={classes.content}>
                    <Typography variant="h5">{item.title}</Typography>
                    <Typography variant="body1">{item.description}</Typography>
                  </Box>
                )
              })}
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Paper>
  )
}

export default DisplayAwards

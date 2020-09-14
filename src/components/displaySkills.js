import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

import { Grid, Paper, Typography, LinearProgress, Box } from "@material-ui/core"

import BrushIcon from "@material-ui/icons/Brush"
import KeyboardIcon from "@material-ui/icons/Keyboard"
import { makeStyles } from "@material-ui/core/styles"
import Tooltip from "@material-ui/core/Tooltip"

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,

    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 50,
    paddingRight: 50,

    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
    },
    background: "white",
    // background: "transparent",
  },
  skillBox: {
    minWidth: "500px",
    margin: 20,
    [theme.breakpoints.down("xs")]: {
      minWidth: "300px",
      margin: 10,
    },
  },
  contentBox: {
    maxWidth: "500px",
    margin: 20,
    [theme.breakpoints.down("md")]: {
      maxWidth: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "300px",
      margin: 10,
    },
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
    color: "black",
  },
  backg: {
    width: "100%",
    backgroundPosition: "bottom center",
    backgroundRepeat: "repeat-y",
    backgroundSize: "cover",
  },
  image: {
    width: "600px",
    marginBottom: `1.45rem`,
    [theme.breakpoints.down("sm")]: {
      width: "500px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
  },
}))

const DisplaySkills = () => {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    {
      allStrapiSkills {
        nodes {
          strapiId
          title
          percentage
          experience
          type
        }
      }
      backgroundImage: file(relativePath: { eq: "window.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      skillImage: file(relativePath: { eq: "horn2.png" }) {
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
        <Grid item>
          <Typography variant="h4" className={classes.title}>
            Skills
          </Typography>
        </Grid>
        <Grid item>
          <Typography>Mazhe skills</Typography>
        </Grid>

        <Grid item>
          <Box style={{ paddingTop: "50px", paddingBottom: "50px" }}>
            {data.allStrapiSkills.nodes.map(item => {
              return (
                <>
                  <Grid id={item.strapiId} className={classes.skillBox}>
                    <div>
                      <LinearProgress
                        variant="determinate"
                        value={item.percentage}
                        color="secondary"
                      />
                    </div>
                  </Grid>
                  <Grid container justify="space-between">
                    <div>
                      <Grid container>
                        {item.type === "design" ? (
                          <BrushIcon />
                        ) : (
                          <KeyboardIcon />
                        )}

                        <Typography variant="body1">{item.title}</Typography>
                      </Grid>
                    </div>
                    <div>
                      <Typography variant="body1">
                        {item.percentage} %
                      </Typography>
                    </div>
                  </Grid>
                </>
              )
            })}
          </Box>
        </Grid>

        <Box>
          <Tooltip
            title={
              <Typography variant="body1">
                One of my Drawings, for more do check ART section
              </Typography>
            }
            arrow
          >
            <Box className={classes.image}>
              <Img fluid={data.skillImage.childImageSharp.fluid} />
            </Box>
          </Tooltip>
        </Box>
      </Grid>
    </Paper>
  )
}

export default DisplaySkills

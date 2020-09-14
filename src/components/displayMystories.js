import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { Grid, Paper, Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#C2D2C1",
    paddingTop: 100,
  },
  image: {
    width: "400px",
    marginBottom: `1.45rem`,
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
}))

const DisplayMystories = () => {
  const classes = useStyles()
  // const data = useStaticQuery(graphql`
  //   {

  // `)

  return (
    <Paper elevation={0} className={classes.root} square>
      <Grid container direction="column" justify="space-evenly" align="center">
        <Grid item>
          <Grid container direction="column">
            <Typography variant="h4">My story</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justify="space-evenly" align="center">
            {/* {data.strapiMystories.story.map(item => {
              return (
                <Paper elevation={0} className={classes.root}>
                  <Grid
                    container
                    justify="space-evenly"
                    alignItems="center"
                    xs="12"
                    sm="auto"
                  >
                    <Grid item>
                      <Grid container direction="column">
                        <Typography variant="h4">{item.title}</Typography>
                        <Typography variant="body">
                          {item.description}
                        </Typography>

                        <Typography variant="body">{item.date}</Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Box className={classes.image}>
                        <Img fluid={item.image.childImageSharp.fluid} />
                      </Box>
                    </Grid>
                  </Grid>
                </Paper>
              )
            })} */}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default DisplayMystories

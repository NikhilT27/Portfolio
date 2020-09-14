import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Grid, Paper, Typography, Box, Hidden } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab"
import BackgroundImage from "gatsby-background-image"

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "#fcf7cc",
    background: "rgb(34,121,0)",
    background:
      "-moz-linear-gradient(45deg, rgba(34,121,0,1) 0%, rgba(148,212,0,1) 29%, rgba(234,255,0,1) 100%)",
    background:
      "-webkit-linear-gradient(45deg, rgba(34,121,0,1) 0%, rgba(148,212,0,1) 29%, rgba(234,255,0,1) 100%)",
    background:
      "linear-gradient(45deg, rgba(34,121,0,1) 0%, rgba(148,212,0,1) 29%, rgba(234,255,0,1) 100%)",

    paddingTop: 50,
    paddingBottom: 50,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 20,
      paddingBottom: 20,
    },
  },
  timeline: {
    width: "800px",
    marginTop: 20,
    marginBottom: 20,

    [theme.breakpoints.down("sm")]: {
      width: "400px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      padding: 0,
    },
  },
  backg: {
    width: "100%",
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    background: "rgb(34,121,0)",
  },
}))

const DisplayEducation = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      allStrapiEducations(sort: { order: DESC, fields: strapiId }) {
        nodes {
          strapiId
          degree_name
          college
          marks
        }
      }
      backgroundImage: file(relativePath: { eq: "leftPlant.png" }) {
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
      <Grid container direction="column" justify="space-evenly" align="center">
        <Grid item>
          <Grid container direction="column">
            <Typography variant="h4">Education</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid>
            <Timeline align="alternate" className={classes.timeline}>
              {data.allStrapiEducations.nodes.map(item => {
                return (
                  <TimelineItem>
                    <Hidden xsDown>
                      <TimelineSeparator>
                        <TimelineConnector color="secondary" />
                        <TimelineDot color="secondary" />
                        <TimelineConnector color="secondary" />
                      </TimelineSeparator>
                    </Hidden>
                    <TimelineContent>
                      <Box>
                        <Grid
                          container
                          justify="space-evenly"
                          alignItems="center"
                        >
                          <Grid item>
                            <Grid
                              container
                              direction="column"
                              justify="center"
                              alignItems="center"
                            >
                              <Typography variant="h6">
                                {item.degree_name}
                              </Typography>
                              <Typography
                                variant="body"
                                color="textSecondary"
                                component="p"
                              >
                                {item.college}
                              </Typography>
                              <Typography variant="h6">{item.marks}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                )
              })}
            </Timeline>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default DisplayEducation

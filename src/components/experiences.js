import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import BackgroundImage from "gatsby-background-image"

import { Grid, Paper, Typography, Box } from "@material-ui/core"

import GitHubIcon from "@material-ui/icons/GitHub"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 50,
    paddingBottom: 50,
    // backgroundColor: "#a1ffaa",
    backgroundColor: "transparent",
  },
  experienceBox: {
    paddingTop: 50,
    paddingBottom: 50,
  },
  image: {
    width: "200px",
  },
  content: {
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
  backg: {
    width: "100%",
    backgroundPosition: "top left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "fit",
    background: "#a1ffaa",
  },
}))

const Experiences = () => {
  const classes = useStyles()
  let count = 0
  const data = useStaticQuery(graphql`
    {
      allStrapiExperiences(sort: { fields: strapiId, order: DESC }) {
        nodes {
          strapiId
          job
          company
          techno_stack
          date
          detail {
            data
            id
          }
          logo {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      backgroundImage: file(relativePath: { eq: "upPlant.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Paper elevation={0} className={classes.root}>
      <Grid container direction="column">
        <Grid container direction="column" justify="center" alignItems="center">
          <Typography variant="h4">Experience</Typography>
          <Typography variant="body1">Description</Typography>
        </Grid>

        {data.allStrapiExperiences.nodes.map(item => {
          count++
          return (
            <Box id={item.strapiId} className={classes.experienceBox}>
              <Grid container justify="space-evenly" alignItems="center">
                <Box className={classes.image}>
                  <Img fluid={item.logo.childImageSharp.fluid} />
                </Box>

                <Box className={classes.content}>
                  <Grid container direction="column">
                    <Typography variant="h3">{count}</Typography>
                    <Typography variant="h5">{item.job}</Typography>
                    <Typography variant="h6">{item.company}</Typography>
                    <Typography variant="body1">{item.date}</Typography>
                    <Typography variant="body2">{item.techno_stack}</Typography>

                    {item.detail.map(({ id, data }) => {
                      return (
                        <Typography id={id} variant="body1">
                          <ChevronRightIcon style={{ fontSize: 15 }} /> {data}
                        </Typography>
                      )
                    })}
                  </Grid>
                </Box>
              </Grid>
            </Box>
          )
        })}
      </Grid>
    </Paper>
  )
}

export default Experiences

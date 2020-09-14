import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

import {
  Button,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  IconButton,
  Box,
  CardMedia,
} from "@material-ui/core"

import GitHubIcon from "@material-ui/icons/GitHub"
import { makeStyles } from "@material-ui/core/styles"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 100,
    paddingBottom: 100,
    background: "gold",
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
  project: {
    padding: 30,
    [theme.breakpoints.down("sm")]: {
      padding: 10,
    },
  },
}))

const Projects = () => {
  const classes = useStyles()
  let count = 0
  const data = useStaticQuery(graphql`
    {
      allStrapiProjects(sort: { fields: strapiId, order: DESC }) {
        nodes {
          strapiId
          title
          techno_stack
          Detail {
            id
            data
          }
          project_image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Paper elevation={0} className={classes.root} square>
      <Grid container direction="column" justify="space-evenly" align="center">
        <Typography variant="h4">Projects</Typography>
        <Typography variant="body1">Description</Typography>
        {data.allStrapiProjects.nodes.map(item => {
          count++
          return (
            <Box style={{ paddingTop: 50 }}>
              <Box display={{ xs: "inline", sm: "none" }}>
                <Grid container justify="center" alignItems="center">
                  <Box className={classes.image}>
                    <Img fluid={item.project_image.childImageSharp.fluid} />
                  </Box>
                  <Grid item>
                    <Box className={classes.content}>
                      <Grid container justify="center" alignItems="center">
                        <Grid item sm={3} xs={12}>
                          <Typography
                            variant="h2"
                            style={{ fontWeight: "bold" }}
                          >
                            {count}
                          </Typography>
                        </Grid>
                        <Grid item sm={9} xs={12}>
                          <Grid
                            container
                            justify="space-around"
                            alignItems="space-between"
                          >
                            <Typography
                              variant="h5"
                              style={{ fontWeight: "bold", textAlign: "left" }}
                            >
                              {item.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              style={{ textAlign: "left" }}
                            >
                              {item.techno_stack}
                            </Typography>
                            {item.Detail.map(({ id, data }) => {
                              return (
                                <Box>
                                  <Typography
                                    id={id}
                                    variant="body1"
                                    style={{
                                      textAlign: "justify",
                                      textJustify: "inter-word",
                                    }}
                                  >
                                    <ChevronRightIcon
                                      style={{ fontSize: 15 }}
                                    />
                                    {data}
                                  </Typography>
                                </Box>
                              )
                            })}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box
                display={{ xs: "none", sm: "inline" }}
                id={item.strapiId}
                className={classes.project}
              >
                <Grid container justify="center" alignItems="center">
                  {count % 2 != 0 ? (
                    <Box className={classes.image}>
                      <Img fluid={item.project_image.childImageSharp.fluid} />
                    </Box>
                  ) : (
                    <div></div>
                  )}
                  <Grid item>
                    <Box className={classes.content}>
                      <Grid
                        container
                        justify="space-around"
                        alignItems="space-around"
                      >
                        {count % 2 != 0 ? (
                          <Grid item sm={3} xs={12}>
                            <Typography
                              variant="h2"
                              style={{ fontWeight: "bold" }}
                            >
                              {count}
                            </Typography>
                          </Grid>
                        ) : (
                          <div></div>
                        )}
                        <Grid item sm={9} xs={12}>
                          <Grid
                            container
                            justify="flex-start"
                            alignItems="center"
                          >
                            <Typography
                              variant="h5"
                              style={{ fontWeight: "bold" }}
                            >
                              {item.title}
                            </Typography>
                            <Typography variant="body2">
                              {item.techno_stack}
                            </Typography>
                            {item.Detail.map(({ id, data }) => {
                              return (
                                <Typography
                                  id={id}
                                  variant="body1"
                                  style={{
                                    textAlign: "justify",
                                    textJustify: "inter-word",
                                  }}
                                >
                                  <ChevronRightIcon style={{ fontSize: 15 }} />
                                  {data}
                                </Typography>
                              )
                            })}
                          </Grid>
                        </Grid>
                        {count % 2 == 0 ? (
                          <Grid item sm={3} xs={12}>
                            <Typography
                              variant="h2"
                              style={{ fontWeight: "bold" }}
                            >
                              {count}
                            </Typography>
                          </Grid>
                        ) : (
                          <div></div>
                        )}
                      </Grid>
                    </Box>
                  </Grid>
                  {count % 2 === 0 ? (
                    <Box className={classes.image}>
                      <Img fluid={item.project_image.childImageSharp.fluid} />
                    </Box>
                  ) : (
                    <div></div>
                  )}
                </Grid>
              </Box>
            </Box>
          )
        })}
      </Grid>
    </Paper>
  )
}

export default Projects

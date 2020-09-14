import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  Box,
  Typography,
  IconButton,
  Grid,
  Tooltip,
  CssBaseline,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/layout"
import Footer from "../components/footer"
import SEO from "../components/seo"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    padding: 130,
    [theme.breakpoints.down("sm")]: {
      padding: 50,
    },

    background: "#fff",
  },
  image: {
    width: "700px",
    marginBottom: `1.45rem`,
    [theme.breakpoints.down("sm")]: {
      width: "300px",
    },
  },
}))

const Drawings = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      allStrapiDrawings(sort: { fields: strapiId, order: DESC }) {
        nodes {
          strapiId
          name
          drawing {
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
    <>
      <CssBaseline />
      <Layout>
        <SEO title="Drawings" />
        <Box className={classes.root}>
          <Box display={{ xs: "none", sm: "inline" }}>
            <Typography variant="h1">Hi </Typography>
            <Typography variant="h1">Welcome to my ART section</Typography>
          </Box>
          <Box display={{ xs: "inline", sm: "none" }}>
            <Typography variant="h4">Hi </Typography>
            <Typography variant="h4">Welcome to my ART section</Typography>
          </Box>
          <Grid container justify="space-evenly" alignItems="center">
            {data.allStrapiDrawings.nodes.map(item => {
              return (
                <Box id={item.strapiId}>
                  <Tooltip title={item.name}>
                    <Box className={classes.image}>
                      <Img fluid={item.drawing.childImageSharp.fluid} />
                    </Box>
                  </Tooltip>
                </Box>
              )
            })}
          </Grid>

          <Link to="/">
            <IconButton>
              <ArrowBackIcon style={{ fontSize: 60 }} />
            </IconButton>
          </Link>
        </Box>
        <Footer />
      </Layout>
    </>
  )
}

export default Drawings

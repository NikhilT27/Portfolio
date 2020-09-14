import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-image"

import MenuIcon from "@material-ui/icons/Menu"
import {
  Box,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core"
import { Link, useStaticQuery, graphql } from "gatsby"

import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import InstagramIcon from "@material-ui/icons/Instagram"
import Fab from "@material-ui/core/Fab"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
    fontWeight: "bold",
    color: "black",
  },
  toolbar: {
    background: "transparent",
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      background: "white",
      height: "60px",
    },
  },
  button: {
    backgroundColor: "yellow",
  },
  logo: {
    width: "60px",
  },
}))

export const Navbar = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      strapiIntroductions {
        id
        name
        description
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo_white: file(relativePath: { eq: "logo_white.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={classes.root}>
      <AppBar className={classes.toolbar}>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Box>
              {/* {data.strapiIntroductions.Name} */}
              <Link to="/" style={{ textDecoration: "none" }}>
                <div className={classes.logo}>
                  <Img fluid={data.logo.childImageSharp.fluid} />
                </div>
              </Link>
            </Box>

            <Box
              display={{ xs: "none", sm: "block" }}
              style={{ display: "flex", alignItems: "flex-end" }}
            >
              <Button color="inherit">
                <Link to="/drawings" style={{ textDecoration: "none" }}>
                  <Typography className={classes.title}> Art</Typography>
                </Link>
              </Button>
            </Box>
          </Grid>
        </Toolbar>
        <Toolbar>
          <Grid direction="column">
            <Box display={{ xs: "none", sm: "inline" }}>
              <Grid item>
                <IconButton
                  target="_blank"
                  href="https://www.linkedin.com/in/nikhil-t/"
                >
                  <LinkedInIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton
                  target="_blank"
                  href="https://www.linkedin.com/in/nikhil-t/"
                >
                  <GitHubIcon />
                </IconButton>
              </Grid>{" "}
              <Grid item>
                <IconButton
                  target="_blank"
                  href="https://www.linkedin.com/in/nikhil-t/"
                >
                  <InstagramIcon />
                </IconButton>
              </Grid>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

import React, { useState, useEffect } from "react";
import { navigate } from "gatsby-link";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import { useHistory } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

import HeaderLayout from "./header";

const themeDark = createTheme({
  overrides: {
    MuiTextField: {
      root: {
        background: "#BD2EDC",
      },
    },
    MuiSelect: {
      root: {
        background: "#BD2EDC",
      },
    },
    MuiStepIcon: {
      root: {
        color: "white",

        "&$completed": {
          color: "rgb(76, 213, 189)",
        },
        "&$active": {
          color: "rgb(76, 213, 189)",
        },
      },
      active: {},
      completed: {},
    },
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: "5px",
        },
        "*::-webkit-scrollbar-track": {
          borderRadius: "5px",
          background: "#858aa8",
        },
        "*::-webkit-scrollbar-thumb": {
          borderRadius: "5px",
          background: "#363845",
        },
      },
    },
  },
  palette: {
    background: {
      default: "#ffedfe",
    },
    text: {
      primary: "#000",
      secondary: "#464646",
    },
    primary: {
      main: "#b91fe0",
    },
    secondary: {
      main: "#EBEBEB",
    },
  },
});

const useStyles = makeStyles(() => ({
  header: {
    position: "fixed",
    background: "#fff",
  },
  navigationContainer: {
    display: "flex",
    marginTop: "1vh",
  },
  iconButtons: {
    padding: 0,
  },
}));

const SidebarLayout = ({
  params,
  children,
  location,
  pageContext,
  ...rest
}) => {
  const styles = useStyles();

  return (
    // <>{children}</>
    <React.Fragment>
      <ThemeProvider theme={themeDark}>
        <CssBaseline />
        <HeaderLayout
        //   className={styles.header}
        //   style={{ background: "red", position: "" }}
        ></HeaderLayout>
        <Toolbar id="back-to-top-anchor" />
        {/* <Container
          maxWidth={false}
          style={{ position: "relative", height: 20 }}
        > */}
        {children}
        {/* </Container> */}
      </ThemeProvider>
    </React.Fragment>
  );
};

export default SidebarLayout;

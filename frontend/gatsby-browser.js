/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react";

import HomeLayout from "./src/component/layout/homeLayout";

// Logs when the client route changes
export const onRouteUpdate = ({ location, prevLocation }) => {
  // console.log("new pathname", location.pathname);
  // console.log("old pathname", prevLocation ? prevLocation.pathname : null);
};

// Set up any Provider components that will wrap your application

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  if (props.path === "/") {
    return <>{element}</>;
  } else {
    return <HomeLayout {...props}> {element}</HomeLayout>;
  }
};

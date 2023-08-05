import React, { cloneElement } from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../lib/contextLib";

// Extracts the querystring parameter from the current URL.
function querystring(name, url = window.location.href) {
    const parsedName = name.replace(/[[]]/g, "\\$&");
    const regex = new RegExp(`[?&]${parsedName}(=([^&#]*)|&|#|$)`, "i");
    const results = regex.exec(url);
  
    if (!results || !results[2]) {
      return false;
    }
  
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

// This is a route that will only render the children if the user is not authenticated.

export default function UnauthenticatedRoute(props) {
    const { isAuthenticated } = useAppContext();
    const { children } = props;
    const redirect = querystring("redirect");

    if (isAuthenticated) {
        return <Navigate to={redirect ||"/"} />;
    }

    return cloneElement(children, props);
}
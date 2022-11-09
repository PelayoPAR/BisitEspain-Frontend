import React from "react";
import ReactDOM from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffc107",
    },
    error: {
      main: "#ff143d",
    },
  },
});

root.render(
  <Router>
    <AuthProviderWrapper>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthProviderWrapper>
  </Router>
);

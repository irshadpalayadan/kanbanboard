import React from "react";
import { makeStyles } from "@material-ui/styles";

import Header from "../common/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh"
  },
  main: {
    height: "calc(100vh - 64px)",
    width: "100vw"
  }
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.main}>{children}</div>
    </div>
  );
};

export default MainLayout;

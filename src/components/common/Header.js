import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appbar: {
    height: "64px",
    backgroundColor: theme.palette.kanban.blue
  },
  grow: {
    flexGrow: 1
  },
  menu: {
    marginLeft: "40px"
  }
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <Button color="inherit" onClick={() => history.push("/home")}>
          Home
        </Button>
        <div className={classes.grow} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from "react";
import {
  makeStyles,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logo1 from "../Images/AZ.svg";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: 70,
  },
  header: {
    backgroundColor: "black",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <img alt="logo" src={logo1} className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

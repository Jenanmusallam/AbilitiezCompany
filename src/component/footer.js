import React from "react";
import { makeStyles, Container, Link, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "15vh",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2" color="textSecondary">
            {"Copyright © "}
            <Link color="inherit" href="http://abilitiez.net/">
              Your Website Abilitiez
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </footer>
    </div>
  );
}

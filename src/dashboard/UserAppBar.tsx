import React from "react";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

export interface User {
  full_name: string;
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export const UserAppBar: React.FC<User> = (props: User) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Rooster
          </Typography>
          Signed in as {props.full_name}.
        </Toolbar>
      </AppBar>
    </div>
  );
};

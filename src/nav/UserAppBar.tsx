import React from "react";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export const UserAppBar: React.FC = (
  props: React.PropsWithChildren<unknown>
) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Rooster
          </Typography>
          {props.children}
        </Toolbar>
      </AppBar>
    </div>
  );
};

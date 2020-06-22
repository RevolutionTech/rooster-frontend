import React from "react";
import axios from "axios";
import { makeStyles, AppBar, Toolbar, Typography } from "@material-ui/core";

import { LoadableText } from "./Loadable";

interface User {
  full_name: string;
}

const getUser = async () => {
  const response = await axios.get<User>("/api/user/");
  return response.data;
};

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const UserAppBar: React.FC<User> = (props: User) => {
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

export const LoadableUserAppBar: React.FC = () => (
  <LoadableText getProps={getUser} component={UserAppBar} />
);

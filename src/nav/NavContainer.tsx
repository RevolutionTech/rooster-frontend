import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import { NavAppBar } from "./NavAppBar";
import { NavDrawer } from "./NavDrawer";

interface Props {
  userInfo: React.ReactNode;
  menuDisabled?: boolean;
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export const NavContainer: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={classes.root}>
      <NavAppBar
        userInfo={props.userInfo}
        onToggleDrawer={() => setDrawerOpen(!isDrawerOpen)}
      />
      <NavDrawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        menuDisabled={props.menuDisabled}
      />
    </div>
  );
};

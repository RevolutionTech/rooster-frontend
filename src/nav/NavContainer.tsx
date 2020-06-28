import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import { NavAppBar } from "./NavAppBar";
import { NavDrawer } from "./NavDrawer";

interface Props {
  menuDisabled?: boolean;
}

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export const NavContainer: React.FC<Props> = (
  props: React.PropsWithChildren<Props>
) => {
  const classes = useStyles();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={classes.root}>
      <NavAppBar onToggleDrawer={() => setDrawerOpen(!isDrawerOpen)}>
        {props.children}
      </NavAppBar>
      <NavDrawer
        isOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        menuDisabled={props.menuDisabled}
      />
    </div>
  );
};

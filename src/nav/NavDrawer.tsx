import React from "react";
import { makeStyles, Drawer, List } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { ListItemLink } from "./ListItemLink";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  menuDisabled?: boolean;
}

const useStyles = makeStyles(() => ({
  list: {
    width: 250,
  },
}));

export const NavDrawer: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <Drawer anchor="left" open={props.isOpen} onClose={props.onClose}>
      <div
        className={classes.list}
        role="presentation"
        onClick={props.onClose}
        onKeyDown={props.onClose}
      >
        <List>
          <ListItemLink
            text="Dashboard"
            to="/"
            icon={HomeIcon}
            disabled={props.menuDisabled}
          />
          <ListItemLink
            text="Settings"
            to="/settings/"
            icon={SettingsIcon}
            disabled={props.menuDisabled}
          />
          <ListItemLink
            text="Logout"
            to="/logout/"
            requireBrowserRefresh={true}
            icon={ExitToAppIcon}
            disabled={props.menuDisabled}
          />
        </List>
      </div>
    </Drawer>
  );
};

import React from "react";
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

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
          <ListItem button component="a" href="/" disabled={props.menuDisabled}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button disabled={props.menuDisabled}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="/logout/"
            disabled={props.menuDisabled}
          >
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

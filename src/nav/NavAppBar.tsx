import React from "react";
import {
  makeStyles,
  Theme,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

interface Props {
  onToggleDrawer: () => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const NavAppBar: React.FC<Props> = (
  props: React.PropsWithChildren<Props>
) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          onClick={props.onToggleDrawer}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Rooster
        </Typography>
        {props.children}
      </Toolbar>
    </AppBar>
  );
};

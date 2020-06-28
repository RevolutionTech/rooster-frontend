import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

interface Props {
  text: string;
  to: string;
  requireBrowserRefresh?: boolean;
  icon?: React.ComponentType;
  disabled?: boolean;
}

export const ListItemLink: React.FC<Props> = (props: Props) => {
  const linkProps = props.requireBrowserRefresh
    ? { component: "a", href: props.to }
    : { component: RouterLink, to: props.to };

  return (
    <ListItem button {...linkProps} disabled={props.disabled}>
      {props.icon && (
        <ListItemIcon>
          <props.icon />
        </ListItemIcon>
      )}
      <ListItemText primary={props.text} />
    </ListItem>
  );
};

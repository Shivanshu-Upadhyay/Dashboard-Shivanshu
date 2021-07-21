import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Fab from "@material-ui/core/Fab";

import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "relative",
    right: theme.spacing(2),
    marginTop: theme.spacing(-1),
  },
}));

export default function CustomFab(props) {
  const classes = useStyles();

  const fab = {
    color: props.color,
    className: classes.fab,
    icon: props.children,
    label: props.label,
  };

  return (
    <div>
      <Tooltip title={`${props.title}`} arrow>
        <Fab
          aria-label={fab.label}
          className={fab.className}
          size="small"
          color={fab.color}
        >
          {fab.icon}
        </Fab>
      </Tooltip>
    </div>
  );
}

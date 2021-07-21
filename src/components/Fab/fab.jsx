import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "relative",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    marginLeft: "95%",
    marginTop: theme.spacing(-1),
  },
}));

export default function FloatingActionButtonZoom(props) {
  const classes = useStyles();

  const fab = {
    color: props.color || "primary",
    className: classes.fab,
    icon: <AddIcon />,
    label: props.label || "Add",
  };

  return (
    <div>
      <Link
        to={`Add ${props.tooltipTitle}`
          .toLocaleLowerCase()
          .replaceAll(" ", "-")}
      >
        <Tooltip title={`Add ${props.tooltipTitle}`} arrow>
          <Fab
            aria-label={fab.label}
            className={fab.className}
            color={fab.color}
          >
            {props.children || fab.icon}
          </Fab>
        </Tooltip>
      </Link>
    </div>
  );
}

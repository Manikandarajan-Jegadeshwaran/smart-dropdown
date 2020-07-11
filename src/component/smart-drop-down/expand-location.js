import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    padding: 10,
  },
}));

function ExpandLocation(props) {
  const classes = useStyles();
  const { open, onExpansion } = props;
  return (
    <Tooltip title={open ? "Close" : "Open"}>
      <IconButton
        className={classes.iconButton}
        aria-label='expand'
        onClick={onExpansion}
      >
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default ExpandLocation;

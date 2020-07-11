import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  iconButton: {
    padding: 10,
  },
}));

function ClearLocation(props) {
  const { onClearLocation } = props;
  const classes = useStyles();
  return (
    <Tooltip title='Clear location'>
      <IconButton
        className={classes.iconButton}
        aria-label='clear'
        onClick={onClearLocation}
      >
        <ClearIcon />
      </IconButton>
    </Tooltip>
  );
}

export default React.memo(ClearLocation);

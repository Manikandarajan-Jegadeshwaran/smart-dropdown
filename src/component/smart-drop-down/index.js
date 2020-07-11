import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ClearLocation from "./clear-location";
import ExpandLocation from "./expand-location";
import SearchLocation from "./search-location";
import RenderLocations from "./render-locations";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    borderBottomLeftRadius: (props) => (props.open ? 0 : 5),
    borderBottomRightRadius: (props) => (props.open ? 0 : 5),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  popperContainer: {
    height: "auto",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
}));

function SmartDropdown(props) {
  const {
    source,
    selectedItem,
    onClearLocation,
    onValueChange,
    childCount,
    allowUserToAdd,
    onAddNew,
  } = props;
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(undefined);
  const [searchValue, setSearchValue] = useState("");

  const classes = useStyles({ open });

  function onExpansion(e) {
    setOpen(!open);
  }

  function onSearchValueChange(e) {
    setSearchValue(e.target.value);
  }

  function onItemChange(item) {
    setSearchValue("");
    setOpen(false);
    onValueChange(item);
  }

  function handleOnAddNew(value) {
    setOpen(false);
    setSearchValue("");
    onAddNew(value);
  }

  return (
    <>
      <Paper
        className={classes.root}
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span className={classes.input}>
            {selectedItem?.name || "Select a location"}
          </span>

          <ClearLocation {...{ onClearLocation }} />
          <Divider className={classes.divider} orientation='vertical' />
          <ExpandLocation {...{ open, onExpansion }} />
        </div>
      </Paper>
      <>
        {open && (
          <Popper open={open} anchorEl={anchorEl} placement='bottom-start'>
            <Paper
              className={classes.popperContainer}
              style={{
                width: anchorEl?.getBoundingClientRect().width,
              }}
            >
              <SearchLocation {...{ searchValue, onSearchValueChange }} />
              <RenderLocations
                {...{
                  source,
                  searchValue,
                  childCount,
                  onItemChange,
                  allowUserToAdd,
                  onAddNew: handleOnAddNew,
                }}
              />
            </Paper>
          </Popper>
        )}
      </>
    </>
  );
}

SmartDropdown.propTypes = {
  source: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, code: PropTypes.string })
  ),
  selectedItem: PropTypes.shape({
    name: PropTypes.string,
    code: PropTypes.string,
  }),
  onClearLocation: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired,
  childCount: PropTypes.number.isRequired,
  allowUserToAdd: PropTypes.bool.isRequired,
  onAddNew: PropTypes.func.isRequired,
};

export default React.memo(SmartDropdown);

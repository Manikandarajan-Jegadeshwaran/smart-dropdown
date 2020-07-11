import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { FixedSizeList } from "react-window";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";


const useStyles = makeStyles((theme) => ({
  root: {
    width: "98%",
    margin: "0 1%",
  },
  control: {
    width: "98%",
    margin: "0 1%",
    "& input": {
      padding: 8,
      height: 25,
    },
  },
}));

function Locations(props) {
  const classes = useStyles();
  return (
    <>
      <SearchLocation />
      <RenderLocations />
    </>
  );
}

export default Locations;

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  control: {
    width: "98%",
    margin: "0 1%",
    "& input": {
      padding: 8,
      height: 25,
    },
  },
}));

function SearchLocation(props) {
  const { searchValue, onSearchValueChange } = props;
  const classes = useStyles();
  return (
    <FormControl fullWidth className={classes.control} variant='outlined'>
      <OutlinedInput
        id='outlined-adornment-amount'
        autoFocus
        placeholder='Search ...'
        value={searchValue}
        onChange={onSearchValueChange}
        startAdornment={
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

SearchLocation.propTypes = {
  searchValue: PropTypes.string.isRequired,
  onSearchValueChange: PropTypes.func.isRequired,
};

export default React.memo(SearchLocation);

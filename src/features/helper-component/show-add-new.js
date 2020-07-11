import React from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const ShowAddNew = ({ allowUserToAdd, setAllowUserToAdd }) => (
  <FormControlLabel
    control={
      <Switch
        checked={allowUserToAdd}
        onChange={() => setAllowUserToAdd(!allowUserToAdd)}
        name='allowUserToAdd'
      />
    }
    labelPlacement='start'
    label={
      <span
        style={{
          textDecoration: allowUserToAdd ? "none" : "line-through",
        }}
      >
        Show "Add New"
      </span>
    }
  />
);

ShowAddNew.propTypes = {
  allowUserToAdd: PropTypes.bool.isRequired,
  setAllowUserToAdd: PropTypes.func.isRequired,
};

export default React.memo(ShowAddNew);

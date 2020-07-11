import React from "react";
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

export default React.memo(ShowAddNew);

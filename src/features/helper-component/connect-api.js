import React from "react";
import PropTypes from "prop-types";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

const ConnectApi = ({ allowApi, setAllowApi }) => (
  <FormControlLabel
    control={
      <Switch
        checked={allowApi}
        onChange={() => setAllowApi(!allowApi)}
        name='allowApi'
      />
    }
    labelPlacement='start'
    label={
      <span
        style={{
          textDecoration: allowApi ? "none" : "line-through",
        }}
      >
        {"Connect API"}
      </span>
    }
  />
);

ConnectApi.propTypes = {
  allowApi: PropTypes.bool.isRequired,
  setAllowApi: PropTypes.func.isRequired,
};

export default React.memo(ConnectApi);

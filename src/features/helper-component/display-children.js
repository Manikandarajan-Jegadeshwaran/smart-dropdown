import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const DisplayChildren = ({ childCount, setChildCount, min, max }) => (
  <FormControlLabel
    control={
      <div style={{ paddingLeft: 10 }}>
        <Button
          variant='contained'
          style={{ minWidth: 0 }}
          disabled={childCount <= min}
          onClick={() => {
            if (childCount === min) {
              return;
            }
            setChildCount(childCount - 1);
          }}
        >
          -
        </Button>
        <span style={{ padding: 10 }}>{`${childCount} Items`}</span>
        <Button
          variant='contained'
          style={{ minWidth: 0 }}
          onClick={() => {
            if (childCount === max) {
              return;
            }
            setChildCount(childCount + 1);
          }}
        >
          +
        </Button>
      </div>
    }
    labelPlacement='start'
    label='Children '
  />
);

DisplayChildren.propTypes = {
  childCount: PropTypes.number.isRequired,
  setChildCount: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default React.memo(DisplayChildren);

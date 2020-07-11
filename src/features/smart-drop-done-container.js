import React, { useState, useEffect, Children } from "react";
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { SmartDropdown } from "../component";
import { Countries } from "../sample-data";
import { getCountries } from "../api";

function SmartDropdownContainer(props) {
  const [source, setSource] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [childCount, setChildCount] = useState(5);
  const [allowUserToAdd, setAllowUserToAdd] = useState(true);
  const [allowApi, setAllowApi] = useState(true);

  useEffect(() => {
    if (allowApi) {
      getCountries()
        .then((res) => {
          if (res?.data) {
            setSource(res.data);
          }
        })
        .catch((err) => {
          setSource(null);
        });
    } else {
      setSource(null);
    }
  }, [allowApi]);

  function onClearLocation() {
    setSelectedItem(null);
  }

  function onValueChange(item) {
    setSelectedItem(item);
  }

  function onAddNew(value) {
    if (value) {
      const newValue = { name: value, code: value };
      setSelectedItem(newValue);
      setSource([...source, newValue]);
    }
  }

  return (
    <Grid container justify='space-around' alignItems='center' spacing={2}>
      <Grid
        item
        container
        //justify='space-around'
        //alignItems='center'
        spacing={2}
        xs={12}
        sm={12}
        md={4}
      >
        <Grid item xs={11} sm={12} md={12}>
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
        </Grid>
        <Grid item xs={11} sm={12} md={12}>
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
        </Grid>
        <Grid item xs={11} sm={12} md={12}>
          <FormControlLabel
            control={
              <div style={{ paddingLeft: 10 }}>
                <Button
                  variant='contained'
                  style={{ minWidth: 0 }}
                  disabled={childCount <= 1}
                  onClick={() => {
                    if (childCount === 1) {
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
                    if (childCount === source?.length) {
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
        </Grid>
      </Grid>
      <Grid item xs={11} sm={11} md={8}>
        <SmartDropdown
          {...{
            source,
            selectedItem,
            onClearLocation,
            onValueChange,
            childCount,
            allowUserToAdd,
            onAddNew,
          }}
        />
      </Grid>
      <Grid item xs={11} sm={12} md={12}>
        <p>
          The parent is responsible for passing the Array of countries. The
          child should iterate and display the list of countries received. The
          max no. of items listed in the dropdown should be configureable from
          the parent. Upon user selecting the country, the parent should log the
          selected the country.
        </p>

        <h4>
          AC 1 - If the user with Add privilege, then if the location user
          searching is not part of the list, then possible to add
        </h4>
        <h4>
          AC 2 - If user, dont have privilege to Add, dont display the "Add &
          Select" button.
        </h4>
        <h4>
          AC 3 - If user click on "X more...", then the complete list of
          countries would be displayed.
        </h4>
      </Grid>
    </Grid>
  );
}

export default SmartDropdownContainer;

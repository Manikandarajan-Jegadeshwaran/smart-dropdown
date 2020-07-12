import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import {
  Requirement,
  Sample,
  ApiReference,
  ConnectApi,
  ShowAddNew,
  DisplayChildren,
} from "./helper-component";
import { SmartDropdown } from "../component";
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

  const onClearLocation = () => setSelectedItem(null);

  const onValueChange = (item) => setSelectedItem(item);

  const onAddNew = (value) => {
    if (value) {
      const newValue = { name: value, code: value };
      setSelectedItem(newValue);
      setSource([...source, newValue]);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item container spacing={2} xs={12} sm={12} md={4}>
        <Grid item xs={11} sm={12} md={12}>
          <ConnectApi {...{ allowApi, setAllowApi }} />
        </Grid>
        <Grid item xs={11} sm={12} md={12}>
          <ShowAddNew {...{ allowUserToAdd, setAllowUserToAdd }} />
        </Grid>
        <Grid item xs={11} sm={12} md={12}>
          <DisplayChildren
            {...{ childCount, setChildCount, min: 1, max: source?.length }}
          />
        </Grid>
      </Grid>
      <Grid item xs={11} sm={11} md={6}>
        <div style={{ marginBottom: 15 }}>
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
        </div>
        <span>{`Selected country : ${
          !selectedItem ? "-" : selectedItem.name
        }`}</span>
      </Grid>
      <Grid item xs={11} sm={12} md={12}>
        <Requirement />
        <Sample />
        <ApiReference />
      </Grid>
    </Grid>
  );
}

export default React.memo(SmartDropdownContainer);

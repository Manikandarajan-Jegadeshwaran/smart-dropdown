import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "98%",
    minHeight: 60,
    margin: "0 1%",
    height: "auto",
    maxHeight: 250,
    overflow: "scroll",
    overflowX: "hidden",
  },
  topLeft: {
    position: "absolute",
    top: 12,
    left: 12,
  },
  topRight: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  bottomRight: {
    position: "absolute",
    bottom: 5,
    right: 25,
  },
}));

function RenderLocations(props) {
  const {
    source,
    searchValue,
    childCount,
    onItemChange,
    allowUserToAdd,
    onAddNew,
  } = props;
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [maxNoOfChild, setMaxNoOfChild] = useState();
  const classes = useStyles();

  useEffect(() => {
    setMaxNoOfChild(childCount);
    setShowMoreButton(true);
  }, [childCount]);

  useEffect(() => {
    if (searchValue && searchValue !== "") {
      setMaxNoOfChild(childCount);
      if (filterBySearchValue()?.length > childCount) {
        setShowMoreButton(true);
      } else {
        setShowMoreButton(false);
      }
    }
  }, [searchValue]);

  function handleShowMoreClick() {
    setMaxNoOfChild(source.length);
    setShowMoreButton(false);
  }

  function filterBySearchValue() {
    return source?.filter((each) =>
      each.name.toLowerCase().startsWith(searchValue.toLowerCase())
    );
  }

  const renderChildren = useCallback(() => {
    if (!source) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <span>{`ERROR - Connect API`}</span>
        </div>
      );
    }

    let _source = source;
    if (searchValue && searchValue !== "") {
      _source = filterBySearchValue();
    }

    if (_source?.length < 1) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <span>{`"${searchValue}" not found`}</span>
          <div>
            {allowUserToAdd && (
              <Button variant='outlined' onClick={() => onAddNew(searchValue)}>
                Add & Select
              </Button>
            )}
          </div>
        </div>
      );
    }

    _source = _source?.slice(0, maxNoOfChild);
    return (
      <>
        {_source?.map((each, index) => (
          <ListItem
            button
            key={`${each.code}_${index}`}
            onClick={() => onItemChange(each)}
          >
            <ListItemText primary={each.name} />
          </ListItem>
        ))}
        <div className={classes.bottomRight}>
          {showMoreButton && (
            <Button onClick={() => handleShowMoreClick()}>Show More</Button>
          )}
        </div>
      </>
    );
  }, [source, searchValue, allowUserToAdd, maxNoOfChild, showMoreButton]);

  return <div className={classes.root}>{renderChildren()}</div>;
}

export default React.memo(RenderLocations);

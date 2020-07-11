# [Smart-dropdown](http://Manikandarajan-Jegadeshwaran.github.io/smart-dropdown)
This project was deployed with github page. [Demo](http://Manikandarajan-Jegadeshwaran.github.io/smart-dropdown)


## Scan and view demo
![Smart-dropdown](https://github.com/Manikandarajan-Jegadeshwaran/smart-dropdown/blob/master/src/assets/image/url.png)

## Sample Code
```javascript
    <SmartDropdown
      {...{
        source: [...response, { name: "some_name", code: "some_code" }],
        selectedItem: { name: "some_name", code: "some_code" },
        onClearLocation: () => handleClearLocation,
        onValueChange: () => handleValueChange,
        childCount: 5,
        allowUserToAdd: true,
        onAddNew: () => handleAddNew,
      }}
    />
```

## Api Reference
### `source [Array]`
Should be the list of items used as dropdown options.

### `selectedItem [Object]`
Selected item should be passed through this attribute. Empty object can pass as default value.

### `childCount [Number]`
Indicates number of items to be shown as options.

### `onClearLocation [Function]`
Callback triggered when user clear the value.

### `onValueChange [Function]`
Callback triggered when user select an item.

### `onAddNew [Function]`
Callback triggered when user try to add a new item.

### `allowUserToAdd [Boolean]`
Enable/Disable add new functionality.

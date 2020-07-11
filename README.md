# [Smart-dropdown](https://manikandarajan-jegadeshwaran.github.io/AutoTiles-UI-Control/)
This project was deployed with github page. [Demo](https://manikandarajan-jegadeshwaran.github.io/AutoTiles-UI-Control/)


## Scan and view demo
![Smart-dropdown](https://github.com/Manikandarajan-Jegadeshwaran/smart-dropdown/blob/master/src/assets/image/url.png)

## Sample Code
```html
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

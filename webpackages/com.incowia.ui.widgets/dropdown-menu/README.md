# `<dropdown-menu>`

Creates a dropdown menu triggered by a button.

## Usage
    <dropdown-menu cubx-webpackage-id="[storeUrl]/com.incowia.ui.widgets@1.0-SNAPSHOT/dropdown-menu"></dropdown-menu>

## Input Slots
###`items` *Object* 
Set the items which should be displayed. Accepts an array where items are of type `Object` having the following structure
 
    {
        "name": String,
        "displayName": String,
        "target": String // specify the link target for this item
    }

###`dropBtnValue` *String*
The given value (if any) will be set as drop buttons text.

### `align` *String*
Defines the alignment of the dropdown. Needs to be either `"left"` or `"right"`.

Default: `"left"`

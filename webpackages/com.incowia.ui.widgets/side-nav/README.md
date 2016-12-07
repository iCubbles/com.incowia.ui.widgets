# `<side-nav>`

Creates an animated closeable side navigation.

## Usage
    <side-nav cubx-webpackage-id="[storeUrl]/com.incowia.ui.widgets@1.0-SNAPSHOT/side-nav"></side-nav>

## Input Slots
###`items` *Object* 
Set the items which should be displayed. Accepts an array where items are of type `Object` having the following structure
 
    {
        "name": String,
        "displayName": String,
        "target": String // specify the link target for this item
    }

###`title` *String*
The given value (if any) will be displayed as the title of the side-nav.

### `anchor` *String*
Defines where to pin the naviagtion. Needs to either `"left"` or `"right"`.

Default: `"left"`

### `modal` *Boolean*
If `true` the `<side-nav>` will mask page content with a semi transparent overlay.

Default: `true`

## Functions

<dl>
<dt><a href="#form">form()</a> ⇒ <code>Object</code></dt>
<dd><p>This function returns a basic form object.</p>
</dd>
<dt><a href="#mapGroupElements">mapGroupElements(options, ele, i)</a> ⇒ <code>Object</code></dt>
<dd><p>This function assigns layoutProps to groupElements.</p>
</dd>
<dt><a href="#box">box(options)</a> ⇒ <code>Object</code></dt>
<dd><p>This function returns the formElement object for the form manifest.</p>
</dd>
<dt><a href="#modifyValidations">modifyValidations(arr)</a> ⇒ <code>Object</code></dt>
<dd><p>This function returns an object with the validations in the proper format.</p>
</dd>
<dt><a href="#handleGroupData">handleGroupData(options)</a> ⇒ <code>Object</code></dt>
<dd><p>This function handles transforming other data for the row.</p>
</dd>
<dt><a href="#formElementsCreator">formElementsCreator(options)</a> ⇒ <code>Array.&lt;Object&gt;</code></dt>
<dd><p>This function returns an object representing each row in the form.</p>
</dd>
</dl>

<a name="form"></a>

## form() ⇒ <code>Object</code>
This function returns a basic form object.

**Kind**: global function  
**Returns**: <code>Object</code> - Returns a basic form object.  
<a name="mapGroupElements"></a>

## mapGroupElements(options, ele, i) ⇒ <code>Object</code>
This function assigns layoutProps to groupElements.

**Kind**: global function  
**Returns**: <code>Object</code> - Returns an Object representing the individual input within the row group with layoutProps added.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Object representing the entire row. |
| ele | <code>Object</code> | Object representing the individual input within the row group. |
| i | <code>number</code> | Represents the position of the individual input within the row group. |

<a name="box"></a>

## box(options) ⇒ <code>Object</code>
This function returns the formElement object for the form manifest.

**Kind**: global function  
**Returns**: <code>Object</code> - Returns the formElement object.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Object representing the entire row. |

<a name="modifyValidations"></a>

## modifyValidations(arr) ⇒ <code>Object</code>
This function returns an object with the validations in the proper format.

**Kind**: global function  
**Returns**: <code>Object</code> - Returns an object containing the validations in the proper format.  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Object&gt;</code> | Array of objects containing validations. |

<a name="handleGroupData"></a>

## handleGroupData(options) ⇒ <code>Object</code>
This function handles transforming other data for the row.

**Kind**: global function  
**Returns**: <code>Object</code> - Object containing gridProps and validations.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Object containing other data for the row. Currently used for gridProps and validations. |

<a name="formElementsCreator"></a>

## formElementsCreator(options) ⇒ <code>Array.&lt;Object&gt;</code>
This function returns an object representing each row in the form.

**Kind**: global function  
**Returns**: <code>Array.&lt;Object&gt;</code> - Returns an array of rows in the form.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | Object representing the form row. |


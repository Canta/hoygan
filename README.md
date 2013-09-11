hoygan
======

JQuery's HOYGAN plugin


This is a plugin for translating text to HOYGAN.

For more information about the HOYGAN language, check out this sources:
* http://www.urbandictionary.com/define.php?term=HOYGAN
* http://www.frikipedia.es/friki/HOYGAN
* http://enciclopedia.us.es/index.php/Hoygan


Requirements
-----------

The HOYGAN plugin requires the jQuery library already loaded.


Usage:
-----

Once loaded in an HTML pade, the HOYGAN plugin can be used on arbitrary 
strings, in three different ways:

* Translating a string, as the plugin also extends the String object.

Example: 

```JavaScript
"this is a string".hoygan();
```

* Calling a function with a String as first parameter.

This is the original way of calling hoygan.

```JavaScript
var result = $.hoygan("this is a string");
```

It also takes a second optional boolean parameter, indicating if the 
process will be randomized (given every time a different result) or 
deterministic (using the same logic, but with the string's properties 
instead of random generated numbers); true" for random, false for 
deterministic (default true).

```JavaScript
var result = $.hoygan("this is a string", false);
```

This last funcionality is useful when it's intended to see the same 
output in different moments without losing the original text.

* Applying hoygan to a collection of HTML DOM nodes.

The plugin has an extension to jQuery object, wich is a collection of 
elements. When used this way, the plugin applies hoygan to the text and 
value of every object in the collection.


```JavaScript
var result = $("div.to-be-translated-to-hoygan").hoygan();
```

Demo
----

There's a demo.html file in the project root folder, that you can use 
to see it in live action.
Just download the project and see the demo.html file in any 
javascript-enabled web browser.


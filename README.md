# JavaScript DocStrings

This repository adds Python-like DocStrings into Javascript!! Finally!!

This light-weight script takes advantage of the object-like datatypes in JavaScript by adding the `.__doc__` property to ***ALL*** data types. I've personally tested it with:

- Arrays
- Objects
- Functions
- HTMLElements
- Strings
- Integers
- Booleans


## Usage


### Set the docstring of a variable using simple assignments:

```javascript

this.__doc__ = "My example docstring"

```



### Set the docstring of a variable using the `setDocString()` method, then return the docstring:

```javascript

this.setDocString("My docstring")
//returns "My docstring" (this.__doc__)

```

### Set the docstring of multiple variables using the `ds.setDocStrings(2DArray)` method.

```javascript

//Pass a variable name in arr[x][0] and the .__doc__ value at arr[x][1].  

ds.setDocStrings(
  [
    [ myVar1, "docstring 1" ],
    [ myVar2, "docstring 2" ]
  
  ]
)

```

If you plan on using, please give this repo a star :) 

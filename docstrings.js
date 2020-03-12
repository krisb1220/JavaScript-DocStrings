
/* 
  - Add __doc__ as a native property for Object & Function 
*/

Object.prototype.__doc__ = 'null';
Function.prototype.__doc__ = 'null';


/* 
  - Add "setDocString()" as a native function for Objects and Functions. [myFunc.setDocString("docstring") ]  
*/
Object.prototype.setDocString = function(string){
  this.__doc__ = string;
  return this.__doc__;
}

Function.prototype.setDocString = function(string){
  this.__doc__ = string;
  return this.__doc__;
}


/* 
  
  - Set docString to multiple elements using a 2D array. Pass a variable literal and your docstring into the 2D Array. 
  - ex. setDocString( [ [var1, docString], [var1, docString] ] ) 

*/

ds.setDocStrings = function(arr){
  let currentIndex = 0;
  arr.forEach(function(variable){
      variable[0].__doc__ = variable[1];
      console.log(`Docstring for variable at index ${currentIndex} has been set to ${variable[1]}`);
      currentIndex++;
  });
}

Function.prototype.setDocString.__doc__ = "Sets the docstring of the variable it's called on. Example --- myVar.setDocString('docstring')"
ds.setDocStrings.__doc__ = "Sets the docstrings for multiple variables using a 2DArray. Example --- setDocString( [ [var1, docString], [var1, docString] ] )"

JavaScript Module

You can install it with: npm install array_flattener

This module adds a method (get_flattened_array) to the JavaScript Array type.

The method follow all the nested arrays and return a new array with all
the found elements redistributed in a only 1 level depht array.

Example :

var array1 = [1, 2, [3, 4, [5]]];
console.log( array1.get_flattened_array() )  // This will show an array with: [1, 2, 3, 4, 5]



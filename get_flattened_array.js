/********************************************************************************************/
/*  Recursive function to flatten all nested elements of an array.                          */
/*                                                                                          */
/*  - Each recursive iteration returns a new the flatered array with all its nested levels. */
/*  - The flattened array is built by a plain concatenation of each return callback.        */
/*                                                                                          */
/*  Example: [[1,2,[3]],4].get_flattened_array();                                           */
/********************************************************************************************/            
Array.prototype.get_flattened_array = function() {
    var nested_array = this;
    var flattened_array = [];   // Current level flattened array

    try {
        for (var index = 0; index < nested_array.length; index++) {
            if (nested_array[index] !== null && nested_array[index].constructor === Array) {
                // If the element is an array, get its flattened array and concat it to the curren level flattened array
                flattened_array = flattened_array.concat( nested_array[index].get_flattened_array() );
            } else {
                // If it is not an array, just push it
                flattened_array.push(nested_array[index]);
            }
        }
    } catch(err) {
        console.log('Error in get_flattened_array: ' + err + ', with nested_array = ' + nested_array);
    } finally {
        return flattened_array;
    }

}
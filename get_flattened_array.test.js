
// Random test
for (var test_num = 0; test_num <= 20; test_num++){
    var nested_array = set_nested_array(0);
    console.log('Test ' + test_num + '; nested_array = ');
    console.log(nested_array);
    console.log('Flattened array -> ' + nested_array.get_flattened_array());
}


/************************************/
/*  Create random nested arrays     */
/************************************/
function set_nested_array(level) {

    var max_elements = Math.floor((Math.random() * 8));    // Set a random length array
    var max_level = 10;                                    // Stop recursivity at 10 level
    var nested_array = [];

    for (var index = 0; index < max_elements; index++) {
        if (level <= max_level && Math.floor((Math.random() * 3)) == 0) { // 33% probability of new nested array
            nested_array.push(set_nested_array(level + 1));
        } else {
            switch (Math.floor((Math.random() * 8))) {
                case 0:	nested_array.push(null);
                case 1:	nested_array.push('string');
                case 2:	nested_array.push({ prop1: 'x' });
                default:	nested_array.push(Math.floor((Math.random() * 100)));
            }

        }
    }                
    return nested_array;                
}
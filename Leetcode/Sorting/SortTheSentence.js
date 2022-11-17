function SortTheSentence(s) {
    //Firt step: -
    let map = {} // Create an an obj;
    let split = s.split(' ') // Split the string and store it in varriable;
    for (i of split) {  // Start a advance for loop
        let index = i.slice(i.length - 1)   // Create a index varriable and store the indexes of the string using slice;
        let word = i.slice(0, i.length - 1) // Create a word varriable and store the words of the string using slice as well;

        map[index] = word;  // Store the data in object in key value pair.
    }

    //Second step: -
    let NewArray = []  // Create a new Array
    for (i = 0; i <= split.length; i++) { // Start a while that run till split.length
        NewArray.push(map[i])  // After that push the element in Object;
    }

    return NewArray.join(' ')  // Return the new Array and join it using join method or function whatever call this i forgot it.
}

let s = 'Mj3 virus4 This1 is2';
console.log(SortTheSentence(s))
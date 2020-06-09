window.onload = startup;

function startup(){

    var tree = [];

    var height = 10;                                 // Change this if you want a longer tree
    var evenOrOdd = 1;                              // If you vant a even number you put 0, if you vant a odd number you write 1
    var width = height * 2 + evenOrOdd;          

    var stump = true;                               // If you want a stump on the tree or not
    var stumpHeight = 3                             // The height of the stump

    writeToArray(height, width, tree, evenOrOdd, stump, stumpHeight);   // This works
    printArray(height, width, tree);                // Just need to print out the correct format
}

function writeToArray(height, width, tree, evenOrOdd, stump, stumpHeight) {
    for (let i = 0; i <= height; i++) {
        var oddNumbersTemp = i * 2 + evenOrOdd;     // Setts how many characters the main content of the Tree is going to be
        var tempArray = [];                         // Just an emty temprary array for storing a line of the Tree. You can porbaly use a normal sting variable, but i used a array
        var emtyRow1 = ((height - i) * 2) / 2;      // Setts how many emty spaces there is going to be before the main content of the Tree

        for (let l = 0; l < width; l++) {           // First for loop for creating the width for the tree
            if (emtyRow1 > 0){
                tempArray.push(" ");                // Creates emty space befor the main content of the tree
                emtyRow1--;
            } else if (oddNumbersTemp > 0) {
                tempArray.push("*");                // Create a * there the tree is
                oddNumbersTemp--;
            } else if (width > 0) {
                tempArray.push(" ");                // Creates emty space afther the main conetn of the tree, maby not needed, but it is here anyways...
            }
        }
        tree.push(tempArray.join(""));              // Joins everyting from the tempArray in a sigle element of the array Tree so it can be printet out as a sting
    }

    if (stump == true) {
        for (var i = 0; i < stumpHeight; i++) {
            var oddNumbersTemp = 2 + evenOrOdd;     // Setts how many characters the main content of the Tree is going to be
            var tempArray = [];                         // Just an emty temprary array for storing a line of the Tree. You can porbaly use a normal sting variable, but i used a array
            var emtyRow1 = ((height - 0) * 2) / 2;      // Setts how many emty spaces there is going to be before the main content of the Tree

            for (let l = 0; l < width; l++) {           // First for loop for creating the width for the tree
                if (emtyRow1 > 1){
                    tempArray.push(" ");                // Creates emty space befor the main content of the tree
                    emtyRow1--;
                } else if (oddNumbersTemp > 0) {
                    tempArray.push("*");                // Create a * there the tree is
                    oddNumbersTemp--;
                } else if (width > 0) {
                    tempArray.push(" ");                // Creates emty space afther the main conetn of the tree, maby not needed, but it is here anyways...
                }
            }
            tree.push(tempArray.join(""));              // Joins everyting from the tempArray in a sigle element of the array Tree so it can be printet out as a sting
        }
    }
}

function printArray(height, width, tree) {

    for (let i = 0; i < tree.length; i++) {
        console.log(tree[i]);                       // Prints the Tree to console. i is the element of the Tree array that is printed
    }
}
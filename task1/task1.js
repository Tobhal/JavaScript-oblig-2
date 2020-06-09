window.onload = startup;

function startup() {
    var addButton = document.getElementById("addButton");                   // Adds the add button to a variable
    var removeLastButton = document.getElementById("removeLastButton");     // Adds the remove last button to a variable
    var removePlaceButton = document.getElementById("removePlaceButton");   // Adds the remove place button to a variable

    addButton.addEventListener("click", testForEmtyFeald);             // Adds a event linser to the add button, it lisens for a click
    removeLastButton.addEventListener("click", removeLast);     // Adds a event linser to the remove last button, it lisens for a click
    removePlaceButton.addEventListener("click", removePlace);   // Adds a event linser to the remove place button, it lisens for a click

    console.log(inputFeald.value);
}

var array = [];     // Creates a emty array at the root of the document, this so i can accsess the array in all of the functions

function testForEmtyFeald() {       // Just here to not add a emty element to the list
    var inputFeald = document.getElementById("inputFeald");
    var userText = inputFeald.value;

    if (userText == "") {       // If there is nothing in the feald the user is alerted about needing to add something in the feald
        alert("Pleace enter something in the input feald");     // Alert the user
    } else {
        addToList(userText);        // Adds the content to the array
    }
}

function addToList(userText) {
    var arrayContent = document.getElementById("arrayContent");
    var arrayContentInfo = document.getElementById("arrayContentInfo");

    var node = document.createElement("LI");                        // Setts document.createElement("LI") to the variable node. So when i need to add a LI element to somme place I just need to write node
    var textNode = document.createTextNode(userText);               // Setts textNode to create a text node and adds the text from the variable userText to the node
    node.appendChild(textNode);                                     // Adds a childe with the contet from textNode to node
    document.getElementById("arrayPrintOut").appendChild(node);     // Writes a new LI to the list as a child element

    array.push(userText);       // Pushes the userText to the last place in the array

    arrayContentInfo.innerHTML = "First element = " + array[0] + "<br> The second element = " + array[array.length - 1] + "<br> There are " + array.length + " total elements in the list.";        // Adds some general information

    inputFeald.value = "";      // Makes the inputFeald emty
}

function removeLast() {
    array.pop();        // Pops the laste element out of the array, removes the element
    var arrayList = document.getElementById("arrayPrintOut");       // Adds the list to the variable
    arrayList.removeChild(arrayList.lastChild);                     // Removes the last child/element of the list

    arrayContentInfo.innerHTML = "First element = " + array[0] + "<br> The second element = " + array[array.length - 1] + "<br> There are " + array.length + " total elements in the list.";        // Adds some general information

}

function removePlace() {
    var removePlaceFeald = parseInt(document.getElementById("removePlaceFeald").value) - 1;     // Parse the value of the placement feald to a int and adds it to a variable. It also removes 1 so that when you type 1 it removes 0 form the array

    array.splice(removePlaceFeald, 1);      // Removes the place written in the input feald

    var arrayList = document.getElementById("arrayPrintOut");       // Adds the list to the variable
    arrayList.children[removePlaceFeald].remove();                  // Removes the child element that the user has desided to remove

    arrayContentInfo.innerHTML = "First element = " + array[0] + "<br> The second element = " + array[array.length - 1] + "<br> There are " + array.length + " total elements in the list.";        // Uppdates the general information
}
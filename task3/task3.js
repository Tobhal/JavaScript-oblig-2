window.onload = startUp;

function startUp() {
    var calculateRadius = document.getElementById("calculateRadius");   //Maps the button Calculate Radius to the variable calculateRadius

    calculateRadius.addEventListener("click", writenCalculate);         // Adds a event lisner to lisen for when the calulate radius button is clicked. I can also use .onclick, but i have just been using event linsner.

    //calculateRadius.onclick = writenCalculate;                        // Added her to show that this also works

    console.log("----- From the task -----")
    console.log(calcCircleAreaByRadius(1));
    console.log(calcCircleAreaByRadius(8));
    console.log(calcCircleAreaByRadius("fifteen"));
    console.log(calcCircleAreaByRadius(-4));
    console.log("-------------------------")

}

function writenCalculate() {
    var radius = parseInt(document.getElementById("radius").value);     // Parses the value tyepd in the text felt that is on the webpage so i can use it for calculation afther

    console.log(calcCircleAreaByRadius(radius));        // Prints calculation of areal by radius to consol, with the user writen radius
    document.getElementById("resoult").innerHTML = "The radius if the sircle you typed is: " +  calcCircleAreaByRadius(radius);     // Prints the resoult of the calculation for the areal on the page
}

function calcCircleAreaByRadius(a) {
    if (a > 0 && Number.isInteger(a)) {                 // Test if the number is above 0 and the number is a number
        return (Math.PI * Math.pow(a, 2)).toFixed(2);   // Caclutlates the Areal of the cirkle and returns the number
    } else {
        return undefined;                               // If the input value is below 0 and/or a number it returns undefined
    }
}
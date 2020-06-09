window.onload = startup;

function startup() {
    console.log(xorGateOne(false, false));
    console.log(xorGateOne(false, true));
    console.log(xorGateOne(true, false));
    console.log(xorGateOne(true, true));
    
    console.log("----");

    console.log(xorGateTwo(false, false));
    console.log(xorGateTwo(false, true));
    console.log(xorGateTwo(true, false));
    console.log(xorGateTwo(true, true));
    
    console.log("----");

    console.log(xorGateThree(false, false));
    console.log(xorGateThree(false, true));
    console.log(xorGateThree(true, false));
    console.log(xorGateThree(true, true));
    
    console.log("----");

    console.log(xorGateFour(false, false));
    console.log(xorGateFour(false, true));
    console.log(xorGateFour(true, false));
    console.log(xorGateFour(true, true));
}

function xorGateOne(a, b) {
    //(a OR b) And (Not (a and b))
    //The same as xorGateTwo
    return (a || b) && !(a && b);
}

function xorGateTwo(a, b) {
    //(a OR b) And (Not a OR Not b)
    //The same as xorGateOne
    return (a || b) && (!a || !b);
}

function xorGateThree(a, b) {
    //Not equivalence
    //The same as xorGateFour
    return !(a == b);
}

function xorGateFour(a, b) {
    //simple: if a is not the same as b, then true, if not the false
    //aslo the same as xorGateThree
    return a != b ? true : false
}
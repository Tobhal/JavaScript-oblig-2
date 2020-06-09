window.onload = startup;

function startup() {

console.log("sixtyfour");

console.log(isPrime(-13)); // false
console.log(isPrime(1)); // false
console.log(isPrime(2)); // true
console.log(isPrime("sixtyfour")); // false
console.log(isPrime(2473)); // true
console.log(isPrime(2475)); // false
console.log(isPrime(3301)); // true
console.log(isPrime(NaN)); // false     Added to test if it can handle not a number inputs

}

function isPrime(n) {
    
    if (n < 2 || !Number.isInteger(n)) {    // Test if n is smaler that 2 or if it is not a number
        return false;                       // If one is true then return false, because no prime number in below 0 or not a number.
    }

    for (var i = 2; i < (n - 1); i++) {     
        if (n % i == 0) {                   // If the input is a number and above 2 then it will test if it can devide it self with some other number than itself and 1
            return false;                   // If the input can devide it self on somehting other than itself or 1 it it then not a prime number and will return false
        }
    }

    return true;        // If the input is a number and is above 2 and can't be devided on someting else than itself and 1 then return 1, because it is a prime number
}
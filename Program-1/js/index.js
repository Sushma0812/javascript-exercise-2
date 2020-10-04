//getting even numbers from a 10 digit number
function getEvenNumbers() {
    var number = document.getElementById("mynumber").value;
    var s = 0;

    while (number > 0) {
        var digit = number % 10;
        var rem = digit % 2;
        if (rem == 0)
            document.write(digit);
        number = number / 10;

    }
   /* while (number !== 0) {
        var r = number % 10;
        s = s * 10 + r;
        number = number / 10;

    }
    while (s !== 0) {
        var rev = s % 10;
        if (rev % 2 === 0) {
            document.write(rev);
        }
        s = s / 10;
    }*/

}
//getting odd numbers from a 10 digit number
function getOddNumbers() {
    var number = document.getElementById("mynumber").value;
    while (number > 0) {
        var digit = number % 10;
        number = number / 10;
        var rem = digit % 2;
        if (rem != 0)
            document.write(digit);
    }
}
//updating one value of even numbers from a 10 digit number
function exchangeNumbers() {
    var number = document.getElementById("mynumber").value;
    while (number > 0) {
        var digit = number % 10;
        number = number / 10;
        var rem = digit % 2;
        if (rem == 0)
            document.write(digit + 1);
        else
            document.write(digit);
    }
}
//removing odd numbers from a 10 digit number
function removeOddnNumbers() {
    var number = document.getElementById("mynumber").value;
    while (number > 0) {
        var digit = number % 10;
        number = number / 10;
        var rem = digit % 2;
        if (rem == 0)
            document.write(digit);
    }
}
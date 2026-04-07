var x = 5;
var y = 7;
var z = x + y;
console.log(z);

 A = "Hello ";
 B = "world!";
 var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

/*
function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Banana found!");
        }
    }
}

function findTheBananaForEach(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

findTheBanana(L1);
findTheBanana(L2);

findTheBananaForEach(L1);
findTheBananaForEach(L2);

*/

var now = new Date();
var hour = now.getHours();
function greeting(x) {
    var greetingElement = document.getElementById("greeting");

    if (greetingElement) {
        if (x < 5 || x >= 20) {
            greetingElement.innerHTML = "Good night! Welcome to the MonoMuse Museum";
        } else if (x < 12) {
            greetingElement.innerHTML = "Good morning! Welcome to the MonoMuse Museum";
        } else if (x < 18) {
            greetingElement.innerHTML = "Good afternoon! Welcome to the MonoMuse Museum";
        } else {
            greetingElement.innerHTML = "Good evening! Welcome to the MonoMuse Museum";
        }
    }
}

greeting(hour);

function addYear() {
    var year = new Date().getFullYear();
    var footerYear = document.getElementById("copyYear");

    if (footerYear) {
        footerYear.innerHTML = "&copy; " + year + " MonoMuse Museum";
    }
}
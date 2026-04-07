//js tests -- should result in no errors online

var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    console.log(x1 + x2);
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

/* 

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// for loop version
function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Banana found!");
        }
    }
}

findTheBanana(L1);
findTheBanana(L2);

// forEach version
function findTheBananaForEach(arr) {
    arr.forEach(function(item) {
        if (item === "Banana") {
            alert("Banana found!");
        }
    });
}

findTheBananaForEach(L1);
findTheBananaForEach(L2);

*/

//greeting

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


//dynamic footer

function addYear() {
    var year = new Date().getFullYear();
    var footerYear = document.getElementById("copyYear");

    if (footerYear) {
        footerYear.innerHTML = "&copy; " + year + " MonoMuse Museum";
    }

    greeting(hour);
}


//active nav

function ActiveNav() {
    var navLinks = document.querySelectorAll('.nav_bar a');
    var currentPage = window.location.pathname.split("/").pop();

    navLinks.forEach(function(link) {
        var linkPage = link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

//read more/less

if (typeof $ !== "undefined") {
    $(document).ready(function () {
        $("#readLess").click(function () {
            $("#longIntro").hide();
            $("#readLess").hide();
            $("#readMore").show();
        });

        $("#readMore").click(function () {
            $("#longIntro").show();
            $("#readLess").show();
            $("#readMore").hide();
        });
    });
}

//form

function showForm(date) {
    var form = document.getElementById("ticketForm");
    var dateField = document.getElementById("selectedDate");

    if (form) {
        form.style.display = "block";
    }

    if (dateField) {
        dateField.value = date;
    }
}

function submitPurchase() {
    alert("Redirecting to payment system.");
}
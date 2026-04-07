function toggleMenu() {
    let x = document.getElementById("myNav");
    if (x.className === "nav_bar") {
        x.className += " responsive";
    } else {
        x.className = "nav_bar";
    }
}

//update year
function addYear() {
    let year = document.getElementById("copyYear");
    if (year) {
        year.innerHTML = "&copy; " + new Date().getFullYear() + " MonoMuse";
    }
}

//good morning/afternoon/evening
function updateGreeting() {
    let greeting = document.getElementById("greeting");
    if (!greeting) return;

    let hour = new Date().getHours();
    if (hour < 12) {
        greeting.innerHTML = "Good morning!";
    } else if (hour < 18) {
        greeting.innerHTML = "Good afternoon!";
    } else {
        greeting.innerHTML = "Good evening!";
    }
}

//show form
function showForm(date) {
    let form = document.getElementById("ticketForm");
    let selectedDate = document.getElementById("selectedDate");

    if (form && selectedDate) {
        selectedDate.value = date;
        form.style.display = "block";
        form.scrollIntoView({ behavior: "smooth" });
    }
}

//submit
function submitPurchase() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let quantity = document.getElementById("quantity").value;
    let date = document.getElementById("selectedDate").value;

    if (!name || !email || !quantity) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you, " + name + "! " + quantity + " ticket(s) booked for " + date + ". A confirmation will be sent to " + email + ".");

    document.getElementById("ticketForm").reset();
    document.getElementById("ticketForm").style.display = "none";
}

window.onload = function () {
    addYear();
    updateGreeting();

    let readMore = document.getElementById("readMore");
    let readLess = document.getElementById("readLess");
    let longIntro = document.getElementById("longIntro");

    if (readMore && readLess && longIntro) {
        readMore.onclick = function () {
            longIntro.style.display = "block";
            readMore.style.display = "none";
            readLess.style.display = "inline-block";
        };

        readLess.onclick = function () {
            longIntro.style.display = "none";
            readMore.style.display = "inline-block";
            readLess.style.display = "none";
        };
    }

    //checkout form
    let checkoutForm = document.getElementById("checkoutForm");

    if (checkoutForm) {
        checkoutForm.onsubmit = function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let quantity = document.getElementById("quantity").value;

            if (!name || !email || !quantity) {
                alert("Please fill in all required fields.");
                return;
            }

            alert("Thank you, " + name + "! Your checkout for " + quantity + " ticket(s) has been received. A confirmation will be sent to " + email + ".");

            checkoutForm.reset();
        };
    }
};
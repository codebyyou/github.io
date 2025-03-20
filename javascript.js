let email_input = setTimeout(function() {prompt("Would you like to subscribe to receive emails? \nIf so, enter your email address here: ",""); } , 5000);
let clicks = 0;

document.getElementById("link").addEventListener("pointerdown", () => {
    clicks++;

    document.getElementById("linkCounter").innerHTML = `Number of clicks on this page ==> ${clicks}`;
})

document.getElementById("tictactoe").addEventListener("pointerdown", () => {
    clicks++;

    document.getElementById("linkCounter").innerHTML = `Number of clicks on this page ==> ${clicks}`;
})

document.getElementById("game").addEventListener("pointerdown", () => {
    clicks++;

    document.getElementById("linkCounter").innerHTML = `Number of clicks on this page ==> ${clicks}`;
})

let style1 = document.getElementById("changestyle1").addEventListener("pointerdown", () => {
    style1.onclick = document.getElementById("pagestyle").setAttribute("href", "style1.css");
})
let style2 = document.getElementById("changestyle2").addEventListener("pointerdown", () => {
    style2.onclick = document.getElementById("pagestyle").setAttribute("href", "style2.css");
})
let style3 = document.getElementById("changestyle3").addEventListener("pointerdown", () => {
    style3.onclick = document.getElementById("pagestyle").setAttribute("href", "style3.css");
})

const username = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;
const send = document.getElementById('send');

send.addEventListener("submit", (event) => {

    event.preventDefault();

    if (username === "" || email === "" || message === "") {
        alert("Please fill out all fields before submitting.");
        // send.disabled = true;
    }
    else{
        // send.disabled = false;
        username, email, message = "";
    }

})



emailjs.init("NhNnJxHaGwpH77-LU");

let email_input = setTimeout(function() {prompt("Would you like to subscribe to receive emails? \nIf so, enter your email address here: ",""); } , 5000);
let clicks = 0;

let alist = document.querySelectorAll("a");

for (let i = 0; i < alist.length; i ++) {

    alist[i].addEventListener("pointerdown", () => {

        clicks++

        document.getElementById("linkCounter").innerHTML = `Number of clicks on this page ==> ${clicks}`;

    })

}

let style1 = document.getElementById("changestyle1").addEventListener("pointerdown", () => {
    style1.onclick = document.getElementById("pagestyle").setAttribute("href", "style1.css");
})
let style2 = document.getElementById("changestyle2").addEventListener("pointerdown", () => {
    style2.onclick = document.getElementById("pagestyle").setAttribute("href", "style2.css");
})
let style3 = document.getElementById("changestyle3").addEventListener("pointerdown", () => {
    style3.onclick = document.getElementById("pagestyle").setAttribute("href", "style3.css");
})

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();


    let templateParams = {
        name: document.getElementById('name').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        email: "dmarsden19@agsb.co.uk",
        website: window.location.href
      };

    let name = document.getElementById('name').value;

    const nameRegex = /^[A-Za-z]+$/;

    if (!nameRegex.test(name)) {
        alert('Please enter a valid name containing only alphabetic characters.');
    } 
    else {
        emailjs.send('service_oblehcv', 'template_a40h6q9', templateParams)
            .then(function(response) {
                alert('Email sent successfully!');
            }, function(error) {
                alert('Failed to send email: ' + error.text);
            });
            document.getElementById('name').value = "";
            document.getElementById('subject').value = "";
            document.getElementById('message').value = "";
            
    }
})

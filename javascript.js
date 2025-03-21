emailjs.init("NhNnJxHaGwpH77-LU");

let email_input = setTimeout(function() {prompt("Would you like to subscribe to receive emails? \nIf so, enter your email address here: ",""); } , 5000);
let clicks = 0;
let image_cycle = 0;

let alist = document.querySelectorAll("a");
let imglist = document.querySelectorAll("img");

for (let i = 0; i < alist.length; i ++) {

    alist[i].addEventListener("pointerdown", () => {

        clicks++

        document.getElementById("linkCounter").innerHTML = `Click<br>Counter:<br>${clicks}`;

    })

}

setInterval("changeImage()",20000)

for (let i = 2; i < imglist.length; i ++) {

    imglist[i].classList.add("animateout");

}

function changeImage() {

    image_cycle = image_cycle == 0 ? 1 : 0;

    for (let i = 2; i < imglist.length; i ++) {

        imglist[i].classList.remove("animateout");
        console.log(imglist)

        setTimeout(() => {

            if (imglist[i].id == "html") {
                document.getElementById("html").src = `HTML${image_cycle}.png`;
            }

            if (imglist[i].id == "css") {
                document.getElementById("css").src = `CSS${image_cycle}.png`;
            }

            if (imglist[i].id == "js") {
                document.getElementById("js").src = `JS${image_cycle}.png`;
            }

            imglist[i].classList.add("animateout");
            console.log(imglist)

        }, 1000)
    }
}

let style1 = document.getElementById("changestyle1").addEventListener("pointerdown", () => {
    style1 = document.getElementById("pagestyle").setAttribute("href", "style1.css");
})
let style2 = document.getElementById("changestyle2").addEventListener("pointerdown", () => {
    style2 = document.getElementById("pagestyle").setAttribute("href", "style2.css");
})
let style3 = document.getElementById("changestyle3").addEventListener("pointerdown", () => {
    style3 = document.getElementById("pagestyle").setAttribute("href", "style3.css");
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
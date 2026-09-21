/* =========================
   PRELOADER
========================= */

window.addEventListener("load", function () {

    const preloader = document.getElementById("preloader");

    setTimeout(function () {
        preloader.style.opacity = "0";

        setTimeout(function () {
            preloader.style.display = "none";
        }, 500);

    }, 800);

});


/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    navMenu.classList.toggle("active");

}


/* Close mobile menu after clicking link */

document.querySelectorAll("#navMenu a").forEach(function (link) {

    link.addEventListener("click", function () {

        document.getElementById("navMenu").classList.remove("active");

    });

});


/* =========================
   BOOKING FORM
========================= */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const phone =
        document.getElementById("phone").value;

    const service =
        document.getElementById("service").value;

    const date =
        document.getElementById("date").value;

    const time =
        document.getElementById("time").value;

    const locationType =
        document.getElementById("locationType").value;

    const message =
        document.getElementById("message").value;


    const whatsappMessage =
        `Hi Glitter Shailu Makeover! 💄

I would like to book an appointment.

👤 Name: ${name}
📞 Phone: ${phone}
💄 Service: ${service}
📅 Date: ${date}
⏰ Time: ${time}
📍 Location: ${locationType}

📝 Special Requirements:
${message || "None"}

Thank you!`;


    const whatsappURL =
        "https://wa.me/916374560651?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(whatsappURL, "_blank");

});
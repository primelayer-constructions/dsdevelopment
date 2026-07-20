// ==========================
// EMAILJS
// ==========================

emailjs.init("gbTzERFS9gUTuSJa1");

// ==========================
// SCROLL REVEAL
// ==========================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

        }

    });

}, {
    threshold: 0.2
});

reveals.forEach(item => observer.observe(item));

// ==========================
// CONTACT FORM
// ==========================

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const button = form.querySelector("button");

    button.disabled = true;
    button.textContent = "Sending...";

    status.textContent = "";
    status.className = "";

    emailjs.sendForm(

        "service_kmdrijf",

        "template_a77dafl",

        this

    )

    .then(() => {

        status.textContent = "✓ Thank you! Your request has been sent successfully.";

        status.classList.add("success");

        form.reset();

        setTimeout(() => {

            status.textContent = "";
            status.className = "";

        }, 5000);

    })

    .catch((error) => {

        console.error(error);

        status.textContent = "Something went wrong. Please try again or contact us directly.";

        status.classList.add("error");

    })

    .finally(() => {

        button.disabled = false;
        button.textContent = "Send Request";

    });

});
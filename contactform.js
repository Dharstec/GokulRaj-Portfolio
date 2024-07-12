document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let formElements = document.querySelectorAll('.form-control');
    formElements.forEach(function (element) {
        element.classList.remove('is-invalid');
    });

    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');
    let phoneNo =   document.getElementById('phoneNo');
    let valid = true;

    if (!name.value.trim()) {
        name.classList.add('is-invalid');
        valid = false;
    }

    if (!email.value.trim() || !validateEmail(email.value)) {
        email.classList.add('is-invalid');
        valid = false;
    }

    if (!message.value.trim()) {
        message.classList.add('is-invalid');
        valid = false;
    }

    if (!phoneNo.value.trim()) {
        phoneNo.classList.add('is-invalid'); // Corrected the class addition
        valid = false;
    }


    if (valid) {
        Email.send({
            SecureToken: "d304d990-75a7-4989-8d7b-715db4893594",
            To: 'dhanasekar1691@gmail.com',
            From: 'dhanasekar1691@gmail.com',
            Subject: "New Contact Form Submission",
            Body: `Name: ${name.value}<br>Email: ${email.value} <br>Phone Number: ${phoneNo.value} <br>Message: ${message.value}`
        }).then(
            response => alert("Mail sent successfully!"),
            error => alert("Failed to send mail: " + error)
        );
        document.getElementById('contactForm').reset();
    }
});


function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// F677B6B163A7D070DD38127F367CDDFA4462
// dhanasekar1691@gmail.com
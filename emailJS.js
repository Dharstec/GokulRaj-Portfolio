(function () {
    emailjs.init("qEr21m8wm2F3LnKZD");

    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        console.log("Submit button clicked");

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phoneNumber = document.getElementById('phoneNo').value;
        var message = document.getElementById('message').value;

        if (name && email && phoneNumber && message) {
            console.log("Form data is valid");

            // Use EmailJS send method with your service ID and template ID
            emailjs.send("service_isxt5ep","template_7zzt276", {
                name: name,
                email: email,
                phoneNumber: phoneNumber,
                message: message
            }).then(function (response) {
                console.log("SUCCESS", response);
                alert('Form submitted successfully!');
                document.getElementById('contactForm').reset();
            }, function (error) {
                console.log("FAILED", error);
                alert('Failed to submit form. Please try again later.');
            });
        } else {
            alert('Please fill in all fields.');
        }
    });
})();
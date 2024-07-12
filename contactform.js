// document.getElementById('contactForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     let formElements = document.querySelectorAll('.form-control');
//     formElements.forEach(function (element) {
//         element.classList.remove('is-invalid');
//     });

//     let name = document.getElementById('name');
//     let email = document.getElementById('email');
//     let message = document.getElementById('message');
//     let phoneNo =   document.getElementById('phoneNo');
//     let valid = true;

//     if (!name.value.trim()) {
//         name.classList.add('is-invalid');
//         valid = false;
//     }

//     if (!email.value.trim() || !validateEmail(email.value)) {
//         email.classList.add('is-invalid');
//         valid = false;
//     }

//     if (!message.value.trim()) {
//         message.classList.add('is-invalid');
//         valid = false;
//     }

//     if (!phoneNo.value.trim()) {
//         phoneNo.classList.add('is-invalid');
//         valid = false;
//     }


//     if (valid) {
//         Email.send({
//             SecureToken: "d304d990-75a7-4989-8d7b-715db4893594",
//             To: 'dhanasekar1691@gmail.com',
//             From: 'dhanasekar1691@gmail.com',
//             Subject: "New Contact Form Submission",
//             Body: `Name: ${name.value}<br>Email: ${email.value} <br>Phone Number: ${phoneNo.value} <br>Message: ${message.value}`
//         }).then(
//             response => alert("Mail sent successfully!"),
//             error => alert("Failed to send mail: " + error)
//         );
//         document.getElementById('contactForm').reset();
//     }
// });


// function validateEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }


$(document).ready(function(){
    $('#contactForm').on('submit', function(e){
        e.preventDefault();
        
        // Collect form data
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phoneNo: $('#phoneNo').val(),
            message: $('#message').val()
        };
        
        // Send AJAX request
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/send',
            data: formData,
            success: function(response){
                $('#response').text(response);
                // Optionally clear the form after successful submission
                $('#contactForm')[0].reset();
            },
            error: function(error){
                $('#response').text('Error sending email.');
            }
        });
    });
});
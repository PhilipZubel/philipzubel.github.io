
(() => {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_AsFKI2VSAXzKBbR4gYrkW');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('service_3alefcd', 'template_ai7m5gk', this)
            .then(function () {
                console.log('SUCCESS!');
                alert("Thanks for the messege! :D")
            }, function (error) {
                console.log('FAILED...', error);
                alert("Ooops... Something went wrong. Please try again later.")
            });
    });
}

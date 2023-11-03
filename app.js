const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const emailSubject = document.getElementById("emailSubject").value;

            const firstNameError = document.getElementById("firstNameError");
            const lastNameError = document.getElementById("lastNameError");
            const emailSubjectError = document.getElementById("emailSubjectError");

            function checkName(name, errorElement) {
                if (name.trim() === "") {
                    errorElement.textContent = "First Name cannot be empty!";
                    return false;
                }

                if (!/^[a-zA-Z ]+$/.test(name)) {
                    errorElement.textContent = "First Name cannot contain numbers or special characters!";
                    return false;
                }

                errorElement.textContent = "";
                return true;
            }

            function checkEmail(email, errorElement) {
                if (email.trim() !== "" && !/^\S+@\S+\.\S+$/.test(email)) {
                    errorElement.textContent = "Invalid email format";
                    return false;
                }

                errorElement.textContent = "";
                return true;
            }

            if (!checkName(firstName, firstNameError) || !checkName(lastName, lastNameError) || !checkEmail(emailSubject, emailSubjectError)) {
                event.preventDefault();
            }
        });
    }
const form = document.getElementById('registrationForm');
        form.onsubmit = function (e) {
            e.preventDefault(); // Prevent form submission

            // Collect form data
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const birthDate = document.getElementById('birthdate').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const gender = document.getElementById('gender').value;
            const address = document.getElementById('address').value;

            // You can use a QR code library like 'qrcode.js' or 'qrcode-generator' to generate the QR code here

            // For demonstration purposes, let's just display the collected data as a JSON string and not generate a real QR code
            const userData = {
                "First Name": firstName,
                "Last Name": lastName,
                "Birth Date": birthDate,
                "Email Address": email,
                "Phone Number": phone,
                "Gender": gender,
                "Address": address
            };
            const qrCodeContainer = document.getElementById('qrcode');
            qrCodeContainer.innerHTML = JSON.stringify(userData, null, 2);
        };
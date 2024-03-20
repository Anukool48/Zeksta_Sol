function validateForm() {
    var password = document.getElementById("exampleInputPassword1").value.trim(); 
    var confirmPassword = document.getElementById("exampleInputNewPassword1").value.trim(); 
    var phone = document.getElementById("exampleInputPhone").value.trim(); 
    var email = document.getElementById("exampleInputPhoneEmail").value.trim();
   
    if (password === "" || email === "" || phone === "" || confirmPassword === "") {
        alert("Please enter all the fields.");
        return false; 
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false; 
    }

    var hasUpperCase = /[A-Z]/.test(password);
    var hasNumericDigit = /[0-9]/.test(password);
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!(hasUpperCase && hasNumericDigit && hasSpecialChar)) {
        alert("Please enter a valid password format: at least 6 characters including one uppercase letter, one numeric digit, and one special character.");
        return false; 
    }

    if (!email.includes("@")) {
        alert("This is not a valid email address.");
        return false;
    }

    var phoneNumber = phone.replace(/[^\d]/g, ""); 
    if (!(/^\d{10}$/).test(phoneNumber)) {
        alert("Please enter a valid phone number with exactly 10 digits.");
        return false; 
    }

    if (password !== confirmPassword) {
        alert("Password and confirm password are not the same.");
        return false; 
    }

    return true;
}

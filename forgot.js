

function validateUpdatePasswordForm() {

    var emailOrPhone = document.getElementById("exampleInputEmail1").value.trim();
    var oldPassword = document.getElementById("exampleInputOldPassword").value.trim();
    var newPassword = document.getElementById("exampleInputNewPassword").value.trim();
    var confirmPassword = document.getElementById("exampleInputConfirmPassword").value.trim();

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phonePattern = /^\d{10}$/;


    if (!emailOrPhone && !oldPassword && !newPassword && !confirmPassword) {
        alert("Please update your details.");
        return false; 
    }

    
    if (/^\d/.test(emailOrPhone)) {
        
        if (!phonePattern.test(emailOrPhone)) {
            alert("Please enter a valid phone number.");
            return false; 
        }
    } else {
        
        if (!emailPattern.test(emailOrPhone)) {
            alert("Please enter a valid email address.");
            return false; 
        }
    }

  
    if (newPassword.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false; 
    }

    var hasUpperCase = /[A-Z]/.test(newPassword);
    var hasNumericDigit = /[0-9]/.test(newPassword);
    var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);

   
    if (!(hasUpperCase && hasNumericDigit && hasSpecialChar)) {
        alert("Please enter a valid password format: at least 6 characters including one uppercase letter, one numeric digit, and one special character.");
        return false; 
    }

    
    if (newPassword !== confirmPassword) {
        alert("New password and confirm password are not the same.");
        return false; 
    }

    return true;
}

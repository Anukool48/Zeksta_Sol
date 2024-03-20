function validateLoginForm() {
    
    var email = document.getElementById("exampleInputEmail1").value.trim(); 

    
    var password = document.getElementById("exampleInputPassword1").value.trim(); 

    
    if (email === "" && password === "") {
        alert("Please enter email and password.");
        return false; 
    }

    
    if (email === "") {
        alert("Please enter an email address.");
        return false; 
    }

   
    if (password === "") {
        alert("Please enter a password.");
        return false; 
    }

    if (email === "yoyoanukool8@gmail.com" && password === "Anukool123@") {
        
        window.location.href = "dashboard.html";
        return false; 
    } else {
        
        alert("Invalid email or password.");
        return false; 
    }
}

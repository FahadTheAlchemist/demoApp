// script.js
function submitForm() {
    var userName = document.getElementById("name").value;
    var passwordInput = document.getElementById("password");
    if (userName.trim() === "") {
        alert("Please enter your name.");
        return;
    }
    if (passwordInput.value.length !== 12) {
        alert("Password must be exactly 12 characters.");
        return;
    }
            
    // Redirect to welcome page with the user's name in the URL
    window.location.href = "welcome.html?name=" + encodeURIComponent(userName);
}

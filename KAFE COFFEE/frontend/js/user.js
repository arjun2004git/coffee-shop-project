document.getElementById("user-login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh
    
    let username = document.getElementById("username").value;

    if (username.trim() !== "") {
        // Store username in local storage (optional)
        localStorage.setItem("username", username);
        
        // Redirect to order page
        window.location.href = "order.html";
    }
});

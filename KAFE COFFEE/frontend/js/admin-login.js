document.getElementById("adminLoginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "arjun" && password === "arjun2004") {
      localStorage.setItem("adminLoggedIn", "true");
      window.location.href = "admin.html";
  } else {
      alert("Invalid username or password.");
  }
});
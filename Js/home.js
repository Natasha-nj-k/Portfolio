//Navigation Bar
window.addEventListener("scroll", function() {
  let navbar = document.getElementById("nav-bar");
  if (window.scrollY > 50) {
      navbar.style.backgroundColor = "#222";
  } else {
      navbar.style.backgroundColor = "transparent";
  }
});

//button
document.getElementById("btn").addEventListener("click", function() {
    window.location.href = "#contact";
});
//Form
document.getElementById("contact-form").addEventListener("submit", function(event) {
  let valid = true;
  
  // Name 
  let name = document.getElementById("name").value;
  let nameError = document.getElementById("name-error");
  if (name.trim() === "") {
      nameError.textContent = "Name is required";
      valid = false;
  } else {
      nameError.textContent = "";
  }
  
  // Email
  let email = document.getElementById("email").value;
  let emailError = document.getElementById("email-error");
  if (!emailRegex.test(email)) {
      emailError.textContent = "Invalid email";
      valid = false;
  } else {
      emailError.textContent = "";
  }

  // Message 
  let message = document.getElementById("message").value;
  let messageError = document.getElementById("message-error");
  if (message.trim() === "") {
      messageError.textContent = "Message is required";
      valid = false;
  } else {
      messageError.textContent = "";
  }
  
  if (!valid) {
      event.preventDefault();
  }
});

//project part
function showDetails(projectId) {
  let detailsElement = document.getElementById(projectId);
  if (detailsElement.style.display === "none" || detailsElement.style.display === "") {
      detailsElement.style.display = "block";
  } else {
      detailsElement.style.display = "none";
  }
}

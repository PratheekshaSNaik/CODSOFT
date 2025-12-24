function joinNow() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message");

  if (email === "") {
    message.style.color = "red";
    message.textContent = "Please enter your email!";
  } else {
    message.style.color = "green";
    message.textContent = "Thanks for connecting with me! 😊";
    document.getElementById("email").value = "";
  }
}

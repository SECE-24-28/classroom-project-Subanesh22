
  // JSON user data
  const users = [
    { "username": "john", "password": "12345" },
    { "username": "sara", "password": "abcde" },
    { "username": "admin", "password": "admin123" }
  ];

  function login() {
    const uname = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("message");

    if (uname === "" || pass === "") {
      msg.style.color = "red";
      msg.innerHTML = "Fields cannot be empty!";
      return;
    }

    // Check JSON data using conditionals
    let found = false;

    for (let user of users) {
      if (user.username === uname && user.password === pass) {
        found = true;
        break;
      }
    }

    if (found) {
      msg.style.color = "green";
      msg.innerHTML = "Login Success!";
    } else {
      msg.style.color = "red";
      msg.innerHTML = "Invalid username or password!";
    }
  }

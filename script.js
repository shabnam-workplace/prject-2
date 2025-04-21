document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const error = document.getElementById("error-message");
  
    if (name === "" || email === "" || message === "") {
      error.textContent = "Please fill in all fields.";
      return;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      error.textContent = "Please enter a valid email.";
      return;
    }
  
    error.textContent = "Message sent successfully!";
    // Here you could also add code to actually send the message
  });
  function addTask() {
    const input = document.getElementById("todoInput");
    const task = input.value.trim();
  
    if (task === "") return;
  
    const li = document.createElement("li");
    li.textContent = task;
  
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.onclick = () => li.remove();
  
    li.appendChild(removeBtn);
    document.getElementById("todoList").appendChild(li);
  
    input.value = "";
  }
  
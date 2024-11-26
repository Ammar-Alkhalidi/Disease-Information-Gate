// Event Listeners
document
  .getElementById("searchButton")
  .addEventListener("click", fetchDiseaseInfo);
document.getElementById("loginButton").addEventListener("click", loginUser);
document
  .getElementById("feedbackButton")
  .addEventListener("click", submitFeedback);

// Fetch Disease Information
function fetchDiseaseInfo() {
  const query = document.getElementById("searchInput").value.trim();
  if (!query) {
    alert("Please enter a disease name.");
    return;
  }

  const url = `http://localhost:3000/diseases/${encodeURIComponent(query)}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Disease not found");
      }
      return response.json();
    })
    .then((data) => {
      displayDiseaseInfo(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Disease not found or an error occurred.");
    });
}

// Display Disease Information
function displayDiseaseInfo(data) {
  const container = document.getElementById("diseaseContainer");
  container.innerHTML = ""; // Clear previous results

  const card = document.createElement("div");
  card.className = "card";

  const diseaseName = document.createElement("h2");
  diseaseName.textContent = data.name;

  const description = document.createElement("p");
  description.textContent = data.description;

  const treatment = document.createElement("p");
  treatment.innerHTML = `<strong>Treatment:</strong> ${data.treatment}`;

  const medicationCourse = document.createElement("p");
  medicationCourse.innerHTML = `<strong>Medication Course:</strong> ${data.medication_course}`;

  card.appendChild(diseaseName);
  card.appendChild(description);
  card.appendChild(treatment);
  card.appendChild(medicationCourse);

  container.appendChild(card);
}

// User Login
function loginUser() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const loginStatus = document.getElementById("loginStatus");

  if (!username || !password) {
    loginStatus.textContent = "Please enter both username and password.";
    return;
  }

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        loginStatus.style.color = "green";
        loginStatus.textContent = "Login successful!";
        // You can store user info in localStorage if needed
      } else {
        loginStatus.style.color = "red";
        loginStatus.textContent = "Invalid username or password.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      loginStatus.style.color = "red";
      loginStatus.textContent = "An error occurred during login.";
    });
}

// Submit Feedback
function submitFeedback() {
  const feedback = document.getElementById("feedbackInput").value.trim();
  const feedbackStatus = document.getElementById("feedbackStatus");

  if (!feedback) {
    feedbackStatus.style.color = "red";
    feedbackStatus.textContent = "Please enter your feedback.";
    return;
  }

  fetch("http://localhost:3000/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ feedback }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        feedbackStatus.style.color = "green";
        feedbackStatus.textContent = "Feedback submitted successfully!";
        document.getElementById("feedbackInput").value = "";
      } else {
        feedbackStatus.style.color = "red";
        feedbackStatus.textContent = "Failed to submit feedback.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      feedbackStatus.style.color = "red";
      feedbackStatus.textContent =
        "An error occurred during feedback submission.";
    });
}

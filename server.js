const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Login Endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Load users from users.json
  fs.readFile("users.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading users.json:", err);
      return res.status(500).json({ success: false });
    }

    const users = JSON.parse(data);
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

// Disease Information Endpoint
app.get("/diseases/:name", (req, res) => {
  const diseaseName = req.params.name.toLowerCase();

  // Load diseases from diseases.json
  fs.readFile("diseases.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading diseases.json:", err);
      return res.status(500).json({ success: false });
    }

    const diseases = JSON.parse(data);
    const disease = diseases.find((d) => d.name.toLowerCase() === diseaseName);

    if (disease) {
      res.json(disease);
    } else {
      res.status(404).json({ success: false, message: "Disease not found" });
    }
  });
});

// Feedback Endpoint
app.post("/feedback", (req, res) => {
  const { feedback } = req.body;

  // Load existing feedback
  fs.readFile("data.json", "utf8", (err, data) => {
    let feedbackData = [];

    if (!err) {
      feedbackData = JSON.parse(data);
    }

    feedbackData.push({ feedback, date: new Date().toISOString() });

    // Save feedback
    fs.writeFile("data.json", JSON.stringify(feedbackData, null, 2), (err) => {
      if (err) {
        console.error("Error writing to data.json:", err);
        return res.status(500).json({ success: false });
      }
      res.json({ success: true });
    });
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

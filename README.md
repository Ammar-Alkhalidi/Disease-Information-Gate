# Disease-Information-Gate

A web application that provides information about various diseases, including their descriptions, treatments, and medication courses. Users can search for diseases, log in with a username and password, and submit feedback or questions.
![Example Image](https://github.com/Ammar-Alkhalidi/Disease-Information-Gate/blob/main/Screenshot%20from%202024-11-28%2022-11-38.png)
# Features
Search for disease information, including descriptions, treatments, and medication courses.
Dynamic disease cards displaying information and images.
User authentication (login with username and password).
Feedback submission system for users to send questions or suggestions.
Uses a local JSON file (diseases.json) to store disease data.

# Technologies Used

- Frontend:
- HTML, CSS, JavaScript
- Google Fonts for custom typography
- Backend:
- Node.js and Express.js
- JSON files for storing data
- Other:
- Local static assets (images and fonts)
- CORS for handling cross-origin requests
- 
# Getting Started
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/disease-info-finder.git
cd disease-info-finder
2. Install Dependencies
Ensure you have Node.js installed, then run:

bash
Copy code
npm install
3. Start the Server
Run the following command to start the Node.js server:

bash
Copy code
node server.js
The server will start on http://localhost:3000.

# Project Structure
csharp
Copy code
project-folder/
├── public/
│   ├── images/          # Images for diseases
│   ├── fonts/           # Custom fonts (if used)
│   ├── style.css        # Application styling
│   ├── script.js        # Client-side JavaScript
│   └── index.html       # Main HTML file
├── server.js            # Backend server
├── diseases.json        # Local disease data
├── data.json            # Feedback data
├── users.json           # User login credentials
└── package.json         # Node.js dependencies
# Usage
1. Search for Diseases
a.Open the application in your browser (http://localhost:3000).
b.Enter a disease name in the search bar (e.g., "Influenza").
c.Click the "Search" button to display disease information, including:
- Disease Name
- Description
- Treatment
- Medication Course
- Image of the disease (if available)
2. User Login
- Use a valid username and password to log in.
- Credentials are stored in users.json.
# Example:
- json
- Copy code
[
    {
        "username": "user1",
        "password": "pass123"
    }
]
- Login status is displayed below the login form.
3. Submit Feedback
- After logging in, navigate to the feedback form.
- Enter your feedback or questions in the textarea.
- Click "Submit Feedback" to send your input to the server.
Feedback is stored in data.json.
Local API Endpoints
1. Login Endpoint
- URL: http://localhost:3000/login
- Method: POST
- Request Body:
- json
- Copy code
{
    "username": "user1",
    "password": "pass123"
}
Response:
Success:
json
Copy code
{ "success": true }
Failure:
json
Copy code
{ "success": false }
2. Feedback Endpoint
URL: http://localhost:3000/feedback
Method: POST
Request Body:
json
Copy code
{
    "feedback": "This is a great app!"
}
Response:
json
Copy code
{ "success": true }
3. Disease Information Endpoint
URL: http://localhost:3000/diseases/:name
Method: GET
Response:
Success:
json
Copy code
{
    "name": "Influenza",
    "description": "Influenza, commonly known as the flu, is a contagious respiratory illness caused by influenza viruses.",
    "treatment": "Rest, hydration, and antiviral medications in severe cases.",
    "medication_course": "Oseltamivir (Tamiflu) 75 mg orally twice daily for 5 days.",
    "image": "images/influenza.jpg"
}
Failure:
json
Copy code
{ "success": false, "message": "Disease not found" }
# Adding New Diseases
- To add a new disease:

Open diseases.json.
Add a new object with the following structure:
json
Copy code
{
    "name": "Disease Name",
    "description": "A brief description of the disease.",
    "treatment": "Treatment details.",
    "medication_course": "Medication course details.",
    "image": "images/disease-name.jpg"
}
- Save the file.
Ensure the corresponding image is added to the images folder.

* Known Issues and Limitations
Case-Sensitive Search: If the search is case-sensitive, ensure all disease names are in lowercase in diseases.json.
Placeholder Images: If an image is missing, consider adding a placeholder image.
Future Enhancements
Search Suggestions: Implement real-time suggestions as the user types.
Database Integration: Replace JSON files with a database (e.g., MongoDB or MySQL) for scalability.
User Registration: Add a signup feature to allow new users to create accounts.
Enhanced Feedback: Provide a dashboard to display user feedback.
Accessibility: Improve accessibility for users with disabilities (e.g., ARIA labels, screen reader support).
License
This project is open-source and available under the MIT License.

# Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -m "Add feature").
Push to the branch (git push origin feature-name).
Open a pull request.
Contact
If you have any questions or feedback, feel free to reach out:

Email: ammar.alkhalidi66@gmail.com
GitHub: https://github.com/Ammar-Alkhalidi/

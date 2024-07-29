This is a Loan System built with Node.js. It includes user authentication, CRUD operations for a 'Loan' entity, and complex mathematical calculations for compound interest.
Features
•	User Registration and Login with JWT for securing routes.
•	Password hashing with bcrypt.
•	CRUD operations for 'Loan' entity.
•	Compound interest calculations performed server-side for authenticated users.
Tech Stack
•	Node.js
•	Express.js
•	MongoDB
•	JWT (JSON Web Tokens)
•	bcrypt
Prerequisites
•	Node.js
•	MongoDB
Installation
1.	Clone the repository:
    git clone https:// https://github.com/jvipul05/Loan
2.	Install dependencies:
    npm install
3.	Set up environment variables:
    PORT=3000 
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
4.	Start the server:
    npm start

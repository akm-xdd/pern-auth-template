# PERN Stack Authentication Template

This project is a template for a basic authentication system built with the PERN stack (PostgreSQL, Express, React, and Node.js). It provides a solid starting point for developers looking to implement authentication in their PERN applications.

## Features

- Basic authentication (register and login)
- Stores user data in a PostgreSQL database
- Passwords are securely hashed before storage
- User data includes email, hashed password, and account creation date

## Database Schema

The `users` table in the PostgreSQL database has the following schema:

| Column Name | Data Type          | Description                           |
| ----------- | ------------------ | ------------------------------------- |
| id          | SERIAL PRIMARY KEY | Unique identifier for each user       |
| email       | VARCHAR(255)       | User's email address                  |
| password    | VARCHAR(255)       | Hashed password                       |
| created_at  | TIMESTAMP          | Date and time the account was created |

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up your PostgreSQL database and update the connection details in the configuration file
4. Run the server with `npm start`
5. Navigate to `localhost:8000` in your browser to access the application

## Contributing

Contributions are welcome! Make sure to raise an issue before submitting a pull request.

## Contact

If you have any questions or feedback, please open an issue on this repository.

---

Happy coding!

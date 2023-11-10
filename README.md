# PERN Stack Authentication Template

This project is a template for a basic authentication system built with the PERN stack (PostgreSQL, Express, React, and Node.js). It provides a solid starting point for developers looking to implement authentication in their PERN applications.

## Features

- Basic authentication (register and login)
- Stores user data in a PostgreSQL database
- Passwords are securely hashed before storage
- User data includes email, hashed password, and account creation date

## Why use this template?

You don't have to! This template is provided as a starting point for developers who want to implement authentication in their PERN applications. It is not intended to be a complete solution, but rather a solid foundation that can be built upon.

Furthermore, this is meant to be just for me. I'm tired of rewriting the same code over and over again, so I'm creating this template to save myself some time. If you find it useful, that's great! But I'm not going to be actively maintaining it. I will however accept pull requests if you want to contribute.

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
6. Use postman to test the API endpoints

## API Endpoints

| Endpoint   | Method | Description                                    | Note                                                               |
| ---------- | ------ | ---------------------------------------------- | ------------------------------------------------------------------ |
| /register  | POST   | Register a new user                            | Can work for both email and usernames                              |
| /login     | POST   | Log in an existing user                        | Requires email and password                                        |
| /logout    | POST   | Log out the current user                       | Clears the cookies and resets the session                          |
| /get-users | GET    | Get the users in the database                  | Not safe and not protected. Use this in your app at your own risk. |
| /protected | GET    | A protected route that requires authentication | Requires authentication to access                                  |

## Feature Checklist/Roadmap/To-Do List

- [x] Basic authentication (register and login)
- [x] A logout route
- [ ] Basic authorization (protect routes) - in progress
- [ ] Sell the project to Facebook for $1 billion - also in progress
- [ ] A better README - already in progress

## Contributing

Contributions are welcome! Make sure to raise an issue before submitting a pull request.

## Contact

If you have any questions or feedback, please open an issue on this repository.

---

Happy coding!

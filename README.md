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
| any other automatic field  | anything you want          | Any other automatic field such as created_at or last access which can be customized according to your needs  |

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up your `.env` file [see here](#env-File)
4. Set up your PostgreSQL database and update the connection details in the configuration file
5. Run the server with `npm start`
6. Navigate to `localhost:8000` in your browser to access the application
7. Use postman to test the API endpoints

## API Endpoints

| Endpoint   | Method | Description                                    | Note                                                               |
| ---------- | ------ | ---------------------------------------------- | ------------------------------------------------------------------ |
| api/v1/register  | POST   | Register a new user                            | Can work for both email and usernames                              |
| api/v1/login     | POST   | Log in an existing user                        | Requires email and password                                        |
| api/v1/logout    | POST   | Log out the current user                       | Clears the cookies and resets the session                          |
| api/v1/get-users | GET    | Get the users in the database                  | Not safe and not protected. Use this in your app at your own risk. |
| api/v1/protected | GET    | A protected route that requires authentication | Requires authentication to access                                  |

## .env File

The `.env` file contains the following environment variables:

- PORT - the port the server will run on, set to 8000 by default
- SECRET - the secret used to sign the JWTs, set whatever you want
- CLIENT_URL - the URL of the client application, set to `http://localhost:5173` for Vite enjoyers
- SERVER_URL - the URL of the server, set to `http://localhost:8000` by default

## Feature Checklist/Roadmap/To-Do List

- [x] Basic authentication (register and login)
- [x] A logout route
- [ ] Basic authorization (protect routes) - in progress
- [ ] Setup tutorial using React Redux - done but not updated
- [ ] Sell the project to Facebook for $1 billion - also in progress
- [ ] A better README - already in progress

## Contributing

Contributions are welcome! Make sure to raise an issue before submitting a pull request.

## Contact

If you have any questions or feedback, please open an issue on this repository.

---

Happy coding!

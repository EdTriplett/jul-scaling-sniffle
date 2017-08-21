## Week Five Assessment

Welcome to the VCS week five assessment. You'll be answering questions and writing code that will
assess your obtained knowledge regarding the `Authentication and Authorisation` sections from our curriculum.

### Getting Started

1. Fork and clone this repo
1. `cd` into the project directory, add your name to the top of this README file. Something like:
`Name: Jiggly Puff`
1. Commit and push and verify it works properly
1. You will need to follow the instructions below for the two major parts of the assessment:
questions & code

### A note to remember

Both questions and the coding part are mandatory. They will both be assessed and taken into consideration
when we calculate the final grade. Omit either at your own risk!

We suggest spending 15 mins on questions and 45 mins on coding.

**Grading**

Questions: 30 points (see each one in parens)
Code: 70 points
Total: 100 points

### Answering questions

The answering questions part is fairly straightforward. You will find in the repository a `QUESTIONS.md`
file that contains the questions. They are numbered, starting with `1`.

Besides the `QUESTIONS.md` file, you will also find in the repository an `ANSWERS.md` file. Obviously,
this one is blank by default and it is expected of you to write the answers to the questions in it.

### Tackling the code part

**Prep:**

1. `cd` into the `code` directory and run `npm i`
2. Check `home.handlebars` and `login.handlebars` in `views` folder to familiarise yourself with th UI

**Requirements:**

You will need to write your whole code in `server.js`. Power up an `Express` app that will use `Handlebars` as a templating engine. You will need to authenticate the app using the `Local` strategy from `passport`. 

The following criteria must be met:

- `GET /` is only accessible to logged in users (this renders `home.handlebars`). If you are logged out and try to access this route, redirect to `/login`.
- `GET /login` is only accessible to logged out users (this renders `login.handlebars`). If you are already logged in and try to access this route, redirect to `/`.
- Login/logout functionality must be checked using middlewares
- The following two endpoints mut also exist: `POST /login` and `POST /logout`. These will login/logout a user via passport
- Use passport session persistence of your logged in user
- DO NOT use any DB. Hardcode the username and password to `admin`. In case these values are provided, consider the login successful
- Hash the hardcoded password using `bcrypt`. Compare only hashed versions of the password when writing authentication logic.

**Grading**

- Middlewares for checking login/logout and protecting routes - (10 points)
- Implement all four routes (12 points)
- Authenticate with passport via `Local` strategy (20 points)
- Correctly using passport session persistence (15 points)
- Hash passwords and compare hashed versions (13 points)

**Good luck!**

### NOTE

**This repo is copyrighted material for your private use only and not to be shared outside of Viking Code School.**
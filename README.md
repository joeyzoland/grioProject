# Grio Coding Challenge &middot;

This is a ReactJS project using Node and Express, in accordance with Grio's interviewing process.  The project requires both login and incrementation functionalities.

## Table of Contents

- [Installing Getting started](#installing-getting-started)
- [Developing](#developing)
  * [Built With](#built-with)
  * [Prerequisites](#prerequisites)
- [Notes](#notes)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


## Installing Getting started

Create a directory (titled "Grio" in this example), clone the git repository into that folder, and then install all dependencies.  Finally, run both the server and client in the same terminal window, courtesy of the "concurrently" module.  Now you're good to go!

```
mkdir Grio
cd Grio
git clone https://github.com/joeyzoland/grioProject
cd grioProject
npm install
npm run dev
```

This command will open up new tab in your browser for:
`http://localhost:3000/`

## Developing

### Built With
Node.js, Express.js, React.js

### Prerequisites

Node

To install Node, follow this link: https://nodejs.org/en/download/

## Notes

This app requires you to log in using the login page.  Several users are hard-coded in the users.json file to simulate the database, with "Bat" being a username and "Man" being a password, for example.  Upon logging in, username is saved within session and used for later authentication purposes.  Afterwards, the user is directed to the main page where the user can traverse from 0 through the powers of 2 in the following fashion: 0, 1, 2, 4, 8, 16, 32, etc.  Users can also logout to destroy their session and login as a different user.

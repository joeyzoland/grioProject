const express = require("express");
const app = express();
const session = require('express-session');

const secret = "YourSecretKeyShouldNeverBeAccessibleOnGitHub"
app.use(session({
  secret: secret,
  resave: false,
  saveUninitialized: true,
  rolling: true
}));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//In the real world, user data would have encrypted passwords and would come from a database instead
const users = require('./users.json')


//ROUTES

app.get("/api/verify", (req, res) => {
  if (req.session.userName === undefined){
    res.json(false)
  }
  else{
    res.json(true)
  }
})

//Several users are hard-coded in users.json; one possibility is username = "Bat" and password = "Man"
app.post("/api/login", (req, res) => {
  username = req.body.userName
  password = req.body.password
  if (username in users){
    if (password === users[username]){
      req.session.userName = req.body.userName
      res.json(true)
    }
    else{
      res.json(false)
    }
  }
  else{
    res.json(false)
  }
})

app.get("/api/logout", (req, res) => {
  req.session.destroy(function(err){
    if (err){
      res.json(false)
    }
    else{
      res.json(true)
    }
  })
})

//Uses session to authenticate
app.get("/api/update/:current", (req, res) => {
  if (req.session.userName !== undefined){
    const current = req.params.current
    const next = (current == 0 ? current + 1 : current * 2)
    res.json(next)
  }else{
    res.json("You must log in to use this route.")
  }
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))

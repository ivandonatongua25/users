const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http").createServer(app);
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const { addUser, getUser, deleteUser, getUsers } = require("./users");

const uri = process.env.MONGO_URI;

const Usr = require("./models/users");

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Server is up and running");
});

app.get("/users",(req,res) =>{

    users = await getUsers();
    res.json({users:users});

});

app.get("/users/:email",(req,res) =>{
    const email = req.params.email;
    user = await getUser(email);
    res.json({user:user}); 
})

app.delete("/users/:email",(req,res) =>{
    const email = req.params.email;
    user = await getUser(email);
    res.json({user:user}); 
})

http.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});

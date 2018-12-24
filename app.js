var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

Book = require("./models/book");

//Connect to Mongo
mongoose.connect('mongodb://localhost/books_db', { useNewUrlParser: true });
var database = mongoose.connection;

app.get("/", function(req, res){
  res.send('Hello World');
});

app.get("/api/books", function(req, res){
  Book.getBooks(function(error, books){
    if(error){
      throw error;
    }
    res.json(books);
  });
});

app.listen(3000, function(){
  console.log("Server is running on port 3000...");
});

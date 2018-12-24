var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//Body parser (middle ware body-parser initialization)
app.use(bodyParser.json());
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

app.get("/api/books/:_id", function(req, res){
  Book.getBookById(req.params._id, function(error, book){
    if(error){
      throw error;
    }
    res.json(book);
  });
});

app.post("/api/books", function(req, res){
  //Body-parser gets into play
  var book = req.body;
  Book.addBook(book, function(error, book){
    if(error){
      throw error;
    }
    res.json(book);
  });
});

app.listen(3000, function(){
  console.log("Server is running on port 3000...");
});

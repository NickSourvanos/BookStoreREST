var mongoose = require("mongoose");

//Book Schema
var bookSchema = mongoose.Schema({
  author: { type: String },
  country: { type: String },
  imageLink: { type: String },
  language: { type: String },
  link: { type: String },
  pages: { type: Number },
  title: { type: String },
  year: { type: Number }
});

var Book = module.exports = mongoose.model('Book', bookSchema);

//Get books list
module.exports.getBooks = function(callback, limit){
  Book.find(callback).limit(limit);
}

//Get Book by id
module.exports.getBookById = function(id, callback){
  Book.findById(id, callback);
}

//Add book
module.exports.addBook = function(book, callback){
  Book.create(book, callback);
}

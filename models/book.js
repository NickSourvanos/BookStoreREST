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

//Update book
module.exports.updateBook = function(id, book, options, callback){
  var query = { _id : id};
  var updatedBook = {
    author: book.author ,
    country: book.country,
    imageLink: book.imageLink ,
    language: book.language,
    link: book.link,
    pages: book.pages,
    title: book.title,
    year: book.year
  }
  Book.findOneAndUpdate(query, updatedBook, options, callback);
}

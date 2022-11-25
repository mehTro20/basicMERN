// const { json } = require("express");
const asyncHandler = require("express-async-handler");

const Book = require("../model/bookModel");

const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
});

const setBook = asyncHandler(async (req, res) => {
  // console.log(req.body.text);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Error message");
  }
  const books = await Book.create({
    name: req.body.text,
  });

  res.status(200).json(books);
});

const putBook = asyncHandler(async (req, res) => {
  const books = await Book.findById(req.params.id);

  if (!books) {
    res.status(400);
    throw new Error("Book not found");
  }

  const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateBook);
});

const deleteBook = asyncHandler(async (req, res) => {
  const books = await Book.findById(req.params.id);

  if (!books) {
    res.status(400);
    throw new Error("Book not found");
  }

  await books.remove()
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBooks,
  setBook,
  putBook,
  deleteBook,
};

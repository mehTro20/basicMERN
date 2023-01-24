// const { json } = require("express");
const asyncHandler = require("express-async-handler");

const Book = require("../model/bookModel");
const User = require("../model/userModel");

//@description    Get books
//@route          GET /books
//@access         Private
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({ user: req.user.id });
  res.status(200).json(books);
});

//@description    Set book
//@route          POST /books
//@access         Private
const setBook = asyncHandler(async (req, res) => {
  // console.log(req.body.name);
  if (!req.body.name) {
    res.status(400);
    throw new Error("Error message");
  }
  const books = await Book.create({
    name: req.body.name,
    user: req.user.id,
  });

  res.status(200).json(books);
});

//@description    Update book
//@route          PUT /books/:id
//@access         Private
const putBook = asyncHandler(async (req, res) => {
  const books = await Book.findById(req.params.id);

  if (!books) {
    res.status(400);
    throw new Error("Book not found");
  }

  const user = await User.findById(req.user.id);

  // Check for user
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Making sure the logged in user matches the book
  if (books.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updateBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateBook);
});

//@description    Delete book
//@route          DELETE /books/:id
//@access         Private
const deleteBook = asyncHandler(async (req, res) => {
  const books = await Book.findById(req.params.id);

  if (!books) {
    res.status(400);
    throw new Error("Book not found");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Making sure the logged in user matches the book
  if (books.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await books.remove();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBooks,
  setBook,
  putBook,
  deleteBook,
};

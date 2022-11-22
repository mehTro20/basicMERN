// const { json } = require("express");
const asyncHandler = require("express-async-handler");

const getBooks = asyncHandler(async (req, res) => {
  res.status(200).json({ book: "Harry Potter" });
});

const setBook = asyncHandler(async (req, res) => {
  console.log(req.body.text);
  if (!req.body.text) {
    res.status(400);
    throw new Error("Error message");
  }

  res.status(200).json({ book: "Tsotsi" });
});

const putBook = asyncHandler(async (req, res) => {
  res.status(200).json({ book: `New Book ${req.params.id}` });
});

const deleteBook = asyncHandler(async (req, res) => {
  res.status(200).json({ book: `Delete Book ${req.params.id}` });
});

module.exports = {
  getBooks,
  setBook,
  putBook,
  deleteBook,
};

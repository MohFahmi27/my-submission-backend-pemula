function isBookExist (books, id) {
  return books.filter((book) => book.id === id).length > 0
}

function getIndex (books, id) {
  return books.findIndex((bookValue) => bookValue.id === id)
}

module.exports = { isBookExist, getIndex }

const books = require('../models/books')

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query
  let booksResult = books

  if (name !== undefined) {
    booksResult = books.filter(book => book.name.toLowerCase().includes(name.toLowerCase()))
  }

  if (reading !== undefined) {
    booksResult = books.filter(book => book.reading === (reading === '1'))
  }

  if (finished !== undefined) {
    booksResult = books.filter(book => book.finished === (finished === '1'))
  }

  const response = h.response({
    status: 'success',
    data: {
      books: booksResult.map(book => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher
      }))
    }
  })
  response.code(200)
  return response
}

module.exports = getAllBooksHandler

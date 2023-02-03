const books = require('../models/books')
const { getIndex } = require('../utils/helper')

const deleteBookById = (request, h) => {
  const { id } = request.params

  const index = getIndex(books, id)

  if (index === -1) {
    const response = h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan'
    })
    response.code(404)
    return response
  }

  books.splice(index, 1)

  const response = h.response({
    status: 'success',
    message: 'Buku berhasil dihapus'
  })
  response.code(200)
  return response
}

module.exports = deleteBookById

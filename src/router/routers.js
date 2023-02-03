const addBookHandler = require('../handler/add-book')
const deleteBookById = require('../handler/delete-book-id')
const changeBookById = require('../handler/edit-book-id')
const getAllBooksHandler = require('../handler/get-book')
const getBookById = require('../handler/get-book-id')

const routers = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: changeBookById
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookById
  }
]

module.exports = routers

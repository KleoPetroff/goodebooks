import isEmpty from 'lodash-es/isEmpty'

const getFromSingleRecord = (book, title) => {
  if (book.title.toString() === title) {
    return {
      id: book.id,
      slug: book.slug
    }
  }
}

const getFromMultipleRecords = (books, title) => {
  const book = books.find(text => text.title === title)

  if (isEmpty(book)) {
    return
  }

  return {
    id: book.id,
    slug: book.slug
  }
};

export function getData(data, title) {
  const books = data.results.books.book

  if (!Array.isArray(books)) {
    return getFromSingleRecord(books, title)
  }

  return getFromMultipleRecords(books, title)
}


import isEmpty from "lodash-es/isEmpty";

export function getData(data, title) {
  const books = data.results.books.book

  if (!Array.isArray(books)) {
    return getFromSingleRecord(books, title)
  }

  return getFromMultipleRecords(books, title)
}

function getFromSingleRecord(book, title) {
  if (book.title.toString() === title) {
    return {
      id: book.id,
      slug: book.slug
    }
  }
}

function getFromMultipleRecords(books, title) {
  const book = books.find(text => text.title === title)

  if (isEmpty(book)) {
    return
  }

  return {
    id: book.id,
    slug: book.slug
  }
}

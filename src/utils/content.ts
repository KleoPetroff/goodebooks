import isEmpty from 'lodash-es/isEmpty'
import { Book, BookMeta, Books, Response } from '../types'

const getFromSingleRecord = (book: Book, title: string): BookMeta => {
  if (book.title === title) {
    return {
      id: book.id,
      slug: book.slug
    }
  }
}

const getFromMultipleRecords = (books: Book[], title: string): BookMeta => {
  const book = books.find(text => text.title === title)

  if (isEmpty(book)) {
    return
  }

  return {
    id: book.id,
    slug: book.slug
  }
};

export function getData(data: Response<Books>, title: string) {
  const books = data.results.books.book

  if (!Array.isArray(books)) {
    return getFromSingleRecord(books, title)
  }

  return getFromMultipleRecords(books, title)
}


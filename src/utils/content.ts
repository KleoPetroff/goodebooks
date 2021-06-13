import isEmpty from 'lodash-es/isEmpty'
import { Book, BookMeta, Books, Response } from '../types'

type BookMetaReturnType = BookMeta | null

const checkBookMatch = (book: Book, title: string, author: string) =>
  book.title === title || book.author['orig-name'] === author

const getFromSingleRecord = (book: Book, title: string, author: string): BookMetaReturnType => {
  if (!checkBookMatch(book, title, author)) {
    return null
  }

  return {
    id: book.id,
    slug: book.slug
  }
}

const getFromMultipleRecords = (
  books: Book[],
  title: string,
  author: string
): BookMetaReturnType => {
  const book = books.find((book) => checkBookMatch(book, title, author))

  if (isEmpty(book)) {
    return null
  }

  return {
    id: book.id,
    slug: book.slug
  }
}

export function getBookMeta(
  data: Response<Books>,
  title: string,
  author: string
): BookMetaReturnType {
  const books = data.results.books.book

  if (!Array.isArray(books)) {
    return getFromSingleRecord(books, title, author)
  }

  return getFromMultipleRecords(books, title, author)
}

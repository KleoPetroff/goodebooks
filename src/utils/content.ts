import isEmpty from 'lodash-es/isEmpty'
import { Book, BookMeta, Books, Response } from '../types'

type BookMetaReturnType = BookMeta | null

const getFromSingleRecord = (book: Book, title: string): BookMetaReturnType => {
  if (book.title !== title) {
    return null
  }

  return {
    id: book.id,
    slug: book.slug
  }
}

const getFromMultipleRecords = (books: Book[], title: string): BookMetaReturnType => {
  const book = books.find(text => text.title === title)

  if (isEmpty(book)) {
    return null
  }

  return {
    id: book.id,
    slug: book.slug
  }
};

export function getData(data: Response<Books>, title: string): BookMetaReturnType {
  const books = data.results.books.book

  if (!Array.isArray(books)) {
    return getFromSingleRecord(books, title)
  }

  return getFromMultipleRecords(books, title)
}


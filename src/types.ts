export interface Response<T> {
  results: Results<T>
}

export interface Results<T> {
  books: T
}

export interface Books {
  book: Book | Book[]
}

export interface Book {
  author: Author
  category: Category
  'created-at': string
  id: string
  lang: string
  'orig-lang': string | {}
  sequence: Sequence
  slug: string
  title: string
  type: string
  year: string
}

export interface Author {
  country: string
  id: string
  info: string
  name: string
  slug: string
  'orig-name': string
  'orig-real-name': string
  'real-name': string
}

export interface Category {
  id: string
  name: string
  'nr-of-books': string
  slug: string
}

export interface Sequence {
  id: string
  name: string
  publisher: string
  slug: string
}

export interface BookMeta {
  id: string
  slug: string
}

export interface GoodreadsMeta {
  title: string
  author: string
}

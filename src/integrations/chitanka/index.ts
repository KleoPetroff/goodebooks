import { xml2json } from 'xml-js'
import isEmpty from 'lodash-es/isEmpty'
import { getBookMeta } from './utils/content'
import { Books, BooksResponse, Response } from './types'
import { buildAnchorElement } from './utils/dom'
import { removeJsonTextAttribute } from './utils/parser'
import { ChromeContentRequest } from '../../shared/types'

interface SetupProps {
  response: BooksResponse
  title: string
  author: string
  targetElement: HTMLElement
}

export class Chitanka {
  private static instance: Chitanka

  private constructor() {}

  public static getInstance(): Chitanka {
    if (!Chitanka.instance) {
      Chitanka.instance = new Chitanka()
    }

    return Chitanka.instance
  }

  buildLink({ response, author, title, targetElement }: SetupProps) {
    if (isEmpty(response.results.books)) {
      return
    }

    const bookMeta = getBookMeta(response as Response<Books>, title, author)

    if (isEmpty(bookMeta)) {
      return
    }

    const link = buildAnchorElement(bookMeta)
    targetElement.parentNode.insertBefore(link, targetElement.nextSibling)
  }

  fetch(request: ChromeContentRequest): Promise<BooksResponse> {
    const url = `https://chitanka.info/books/search.xml?q=${request.title}&match=exact`

    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => res.text())
        .then((data: string) => {
          const stringifiedJson = xml2json(data, {
            compact: true,
            trim: true,
            ignoreDeclaration: true,
            ignoreInstruction: true,
            ignoreAttributes: true,
            ignoreComment: true,
            ignoreCdata: true,
            ignoreDoctype: true,
            textFn: removeJsonTextAttribute
          })

          return JSON.parse(stringifiedJson)
        })
        .then((book) => resolve(book))
        .catch((error) => reject(error))
    })
  }
}

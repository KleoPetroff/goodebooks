import isEmpty from 'lodash-es/isEmpty'
import { getBookMeta } from './utils/content'
import { buildAnchorElement } from './utils/dom'
import { Books, Response } from './types'

const title = document.getElementById('bookTitle').textContent.trim()
const author = document.querySelector('.authorName [itemprop="name"]').textContent

chrome.runtime.sendMessage({ title }, (response: Response<Books | {}>) => {
  if (isEmpty(response.results.books)) {
    return
  }

  const bookMeta = getBookMeta(response as Response<Books>, title, author)

  if (isEmpty(bookMeta)) {
    return
  }

  const ratingElement = document.querySelector('.ratingStars.wtrRating')
  const link = buildAnchorElement(bookMeta)

  ratingElement.parentNode.insertBefore(link, ratingElement.nextSibling)
})

import isEmpty from 'lodash-es/isEmpty'
import { getData } from './utils/content'
import { buildAnchorElement } from './utils/dom'
import { Books, Response } from "./types";

const bookTitle = document.getElementById('bookTitle').textContent.trim()

chrome.runtime.sendMessage({ title: bookTitle }, (response: Response<Books | {}>) => {
  if (isEmpty(response.results.books)) {
    return
  }

  const bookMeta = getData(response as Response<Books>, bookTitle)

  if (!data) {
    return
  }

  const ratingElement = document.querySelector('.ratingStars.wtrRating')
  const link = buildAnchorElement(bookMeta)

  ratingElement.parentNode.insertBefore(link, ratingElement.nextSibling)
})



import isEmpty from 'lodash-es/isEmpty'
import { getData } from './utils/content'
import { buildAnchorElement } from './utils/dom'

const bookTitle = document.getElementById('bookTitle').textContent.trim()

chrome.runtime.sendMessage({ title: bookTitle }, response => {
  if (isEmpty(response.results.books)) {
    return
  }

  const data = getData(response, bookTitle)

  if (!data) {
    return
  }

  const ratingElement = document.querySelector('.ratingStars.wtrRating')
  const link = buildAnchorElement(data)

  ratingElement.parentNode.insertBefore(link, ratingElement.nextSibling)
})



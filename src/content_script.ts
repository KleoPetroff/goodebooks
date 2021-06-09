import isEmpty from 'lodash-es/isEmpty'
import { getData } from './utils/content'
import { buildUrl } from './utils/dom'

const bookTitle = document.getElementById('bookTitle').textContent.trim()

chrome.runtime.sendMessage({ name: bookTitle }, response => {
  if (isEmpty(response.results.books)) {
    return
  }

  const data = getData(response, bookTitle)

  if (!data) {
    return
  }

  const ratingElement = document.querySelector('.ratingStars.wtrRating')
  const link = buildUrl(data)

  ratingElement.parentNode.insertBefore(link, ratingElement.nextSibling)
})



import { GoodreadsMeta } from './types'

export const getGoodreadsData = (): GoodreadsMeta => ({
  title: document.getElementById('bookTitle').textContent.trim(),
  author: document.querySelector('.authorName [itemprop="name"]').textContent,
  targetElement: document.querySelector('.ratingStars.wtrRating')
})

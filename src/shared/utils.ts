import { GoodreadsMeta } from './types'

export const getGoodreadsMeta = (): GoodreadsMeta => {
  return {
    title: document.getElementById('bookTitle').textContent.trim(),
    author: document.querySelector('.authorName [itemprop="name"]').textContent
  }
}

export const removeJsonTextAttribute = (value: string, parentElement: any) => {
  const keyNo = Object.keys(parentElement._parent).length
  const keyName = Object.keys(parentElement._parent)[keyNo - 1]

  parentElement._parent[keyName] = value
}

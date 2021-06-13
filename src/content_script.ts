import isEmpty from 'lodash-es/isEmpty'
import { getGoodreadsData } from './shared/utils'
import { getBookMeta } from './integrations/chitanka/utils/content'
import { buildAnchorElement } from './integrations/chitanka/utils/dom'
import { Books, Response } from './integrations/chitanka/types'

const { author, title, targetElement } = getGoodreadsData()

chrome.runtime.sendMessage({ title }, (response: Response<Books | {}>) => {
  if (isEmpty(response.results.books)) {
    return
  }

  const bookMeta = getBookMeta(response as Response<Books>, title, author)

  if (isEmpty(bookMeta)) {
    return
  }

  const link = buildAnchorElement(bookMeta)
  targetElement.parentNode.insertBefore(link, targetElement.nextSibling)
})

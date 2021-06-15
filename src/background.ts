import { Chitanka } from './integrations/chitanka'
import { ChromeContentRequest } from './shared/types'

chrome.runtime.onMessage.addListener((request: ChromeContentRequest, sender, sendResponse) => {
  Chitanka.getInstance()
    .fetch(request)
    .then((book) => sendResponse(book))
    .catch((error) => console.log(error))

  return true // Will respond asynchronously.
})

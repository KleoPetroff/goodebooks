import { Chitanka } from './integrations/chitanka'
import { ChromeContentRequest, Integrations } from './shared/types'

chrome.runtime.onMessage.addListener(
  (request: ChromeContentRequest, sender, sendResponse) => {
    if (request.type === Integrations.CHITANKA) {
      Chitanka.getInstance()
        .fetch(request)
        .then((book) => sendResponse(book))
        .catch((error) => console.log(error))
    }

    return true // Will respond asynchronously.
  }
)

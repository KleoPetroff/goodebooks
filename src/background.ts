import { Chitanka } from './integrations/chitanka'
import { ChromeContentRequest, Integrations } from './shared/types'

chrome.runtime.onMessage.addListener(
  (
    request: ChromeContentRequest,
    _sender: chrome.runtime.MessageSender,
    sendResponse: (response?: any) => void
  ) => {
    if (request.type === Integrations.CHITANKA) {
      Chitanka.getInstance()
        .fetch(request)
        .then((book) => sendResponse(book))
        .catch((error) => console.error(error.message))
    }

    return true // Will respond asynchronously.
  }
)

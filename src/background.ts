import { Chitanka } from './integrations/chitanka'
import { ChromeContentRequest } from './shared/types'

chrome.runtime.onMessage.addListener((request: ChromeContentRequest, sender, sendResponse) => {
  Chitanka.getInstance().fetch(request, sendResponse)
})

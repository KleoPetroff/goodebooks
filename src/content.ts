import { getGoodreadsData } from './shared/utils'
import { BooksResponse } from './integrations/chitanka/types'
import { Chitanka } from './integrations/chitanka'
import { Integrations } from './shared/types'

const { author, title, targetElement } = getGoodreadsData()

chrome.runtime.sendMessage(
  { title, type: Integrations.CHITANKA },
  (response: BooksResponse) => {
    Chitanka.getInstance().buildLink({ response, title, author, targetElement })
  }
)

import { getGoodreadsData } from './shared/utils'
import { Books, Response } from './integrations/chitanka/types'
import { Chitanka } from './integrations/chitanka'
import { Integrations } from './shared/types'

const { author, title, targetElement } = getGoodreadsData()

chrome.runtime.sendMessage(
  { title, type: Integrations.CHITANKA },
  (response: Response<Books | {}>) => {
    Chitanka.getInstance().buildLink({ response, title, author, targetElement })
  }
)

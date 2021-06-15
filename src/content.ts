import { getGoodreadsData } from './shared/utils'
import { Books, Response } from './integrations/chitanka/types'
import { Chitanka } from './integrations/chitanka'

const { author, title, targetElement } = getGoodreadsData()

chrome.runtime.sendMessage({ title }, (response: Response<Books | {}>) => {
  Chitanka.getInstance().buildLink({ response, title, author, targetElement })
})

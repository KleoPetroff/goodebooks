import { getGoodreadsData } from './shared/utils'
import { BooksResponse } from './integrations/chitanka/types'
import { Chitanka } from './integrations/chitanka'
import { Integrations } from './shared/types'

const { author, title, targetElement } = getGoodreadsData()

async function getBooks() {
  return new Promise<BooksResponse>((resolve) => {
    chrome.runtime.sendMessage(
      { title, type: Integrations.CHITANKA },
      (response: BooksResponse) => {
        resolve(response)
      }
    )
  })
}

async function buildLink() {
  try {
    const response = await getBooks()
    Chitanka.getInstance().buildLink({ response, title, author, targetElement })
  } catch (error) {
    console.error(error)
  }
}

buildLink()

import { getGoodreadsData } from './shared/utils'
import { BooksResponse } from './integrations/chitanka/types'
import { Chitanka } from './integrations/chitanka'
import { Integrations } from './shared/types'

const { author, title, targetElement } = getGoodreadsData()

const getBooks = async (): Promise<BooksResponse> => {
  try {
    return await new Promise((resolve) => {
      chrome.runtime.sendMessage({ title, type: Integrations.CHITANKA }, resolve)
    })
  } catch (error) {
    console.error(error)
    return Promise.reject(error)
  }
}

const buildLink = async (): Promise<void> => {
  try {
    const response = await getBooks()
    Chitanka.getInstance().buildLink({ response, title, author, targetElement })
  } catch (error) {
    console.error(error)
  }
}

buildLink()

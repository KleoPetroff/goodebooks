import { BookMeta } from '../types'

export const buildAnchorElement = ({ id, slug }: BookMeta) => {
  const a = document.createElement('a')

  a.setAttribute('href', `https://chitanka.info/book/${id}-${slug}`)
  a.setAttribute('target', '_blank')
  a.setAttribute('rel', 'noopener noreferrer')
  a.text = 'Прочети в Chitanka'

  return a
}

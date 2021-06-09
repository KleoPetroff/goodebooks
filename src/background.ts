import { xml2json } from 'xml-js'
import { removeJsonTextAttribute } from './utils/parser'

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const url = `https://chitanka.info/books/search.xml?q=${request.name}&match=exact`

  fetch(url)
    .then((res) => res.text())
    .then((data) => {
      const stringifiedJson = xml2json(data, {
        compact: true,
        trim: true,
        ignoreDeclaration: true,
        ignoreInstruction: true,
        ignoreAttributes: true,
        ignoreComment: true,
        ignoreCdata: true,
        ignoreDoctype: true,
        textFn: removeJsonTextAttribute
      })

      return JSON.parse(stringifiedJson)
    })
    .then((book) => sendResponse(book))
    .catch((error) => console.log(error))

  return true; // Will respond asynchronously.
});

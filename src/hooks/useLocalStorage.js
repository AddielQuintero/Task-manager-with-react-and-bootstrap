import { useState } from 'react'

const api = [
  { id: 1, text: 'Read for 1 hour', completed: false },
  { id: 2, text: 'Watering plants', completed: true },
  { id: 3, text: 'Making the bed', completed: true },
  { id: 4, text: 'Throw trash', completed: true },
]

function useLocaStorage(itenName, initialValue) {
  let localStorageItem = localStorage.getItem(itenName)
  let parseItem

  if (!localStorageItem) {
    /** Start the empty app */
    // localStorage.setItem(itenName, JSON.stringify(initialValue))
    // parseItem = initialValue

    /** Start app with values */
    localStorage.setItem(itenName, JSON.stringify(api))
    parseItem = JSON.parse(localStorage.getItem(itenName))
  } else {
    parseItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parseItem)

  const saveItem = (newItem) => {
    localStorage.setItem(itenName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

export { useLocaStorage }

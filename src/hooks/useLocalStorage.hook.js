import { useState } from 'react'
import { API } from '../services'

function useLocaStorage(itenName, initialValue) {
  const api = API()

  let localStorageItem = localStorage.getItem(itenName)
  let parseItem

  if (!localStorageItem) {
    /** Start the empty app */
    // localStorage.setItem(itenName, JSON.stringify(initialValue))
    // parseItem = initialValue

    /** Start app with default values */
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

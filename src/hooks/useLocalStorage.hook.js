import { useState, useEffect } from 'react'
import { API } from '../services'

export const useLocalStorage = (itemName, initialValue) => {
  const api = API()

  let localStorageItem = localStorage.getItem(itemName)
  let parseItem

  if (!localStorageItem) {
    /** Start the empty app */
    // localStorage.setItem(itemName, JSON.stringify(initialValue))
    // parseItem = initialValue

    /** Start app with default values */
    localStorage.setItem(itemName, JSON.stringify(api))
    parseItem = JSON.parse(localStorage.getItem(itemName))
  } else {
    parseItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parseItem)

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [item, saveItem]
}

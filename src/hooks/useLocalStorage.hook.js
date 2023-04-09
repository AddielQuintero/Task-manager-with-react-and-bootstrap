import { useState, useEffect } from 'react'
import { API } from '../services'

export const useLocalStorage = (itemName, initialValue) => {
  const api = API()
  const [item, setItem] = useState(initialValue)
  const [sincronized, setSincronized] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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

    setItem(parseItem)
    setSincronized(true)
    setLoading(false)
  }, [sincronized])

  const sincronizedTask = () => {
    setSincronized(false)
  }

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return { item, saveItem, sincronizedTask, loading }
}

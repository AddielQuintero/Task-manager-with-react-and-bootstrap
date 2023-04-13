import { useEffect, useReducer } from 'react'
import { API } from '../services'

export const useLocalStorage = (itemName, initialValue) => {
  const api = API()
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }))
  const { item, sincronized, loading } = state

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

    dispatch({ type: actionTypes.update_item, payload: parseItem })
    dispatch({ type: actionTypes.sincronized })
    dispatch({ type: actionTypes.loading })
  }, [sincronized])

  const sincronizedTask = () => {
    dispatch({ type: actionTypes.sincronizedTask })
  }

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    dispatch({ type: actionTypes.update_item, payload: newItem })
  }

  return { item, saveItem, sincronizedTask, loading }
}

const initialState = ({ initialValue }) => ({
  item: initialValue,
  sincronized: true,
  loading: true,
})

const actionTypes = {
  update_item: 'UPDATE_ITEM',
  sincronized: 'SINCRONIZED',
  sincronizedTask: 'SINCRONIZED_TASK',
  loading: 'LOADING',
}

const reducer = (state, action) => {
  const actions = {
    [actionTypes.update_item]: () => ({ ...state, item: action.payload }),
    [actionTypes.sincronized]: () => ({ ...state, sincronized: true }),
    [actionTypes.sincronizedTask]: () => ({ ...state, sincronized: false }),
    [actionTypes.loading]: () => ({ ...state, loading: false }),
  }
  return actions[action.type]?.() || state
}

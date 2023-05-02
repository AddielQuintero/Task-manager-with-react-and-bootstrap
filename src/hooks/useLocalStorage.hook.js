import { useEffect, useReducer } from "react";
import { API } from "../services";

export const useLocalStorage = (itemName, initialValue) => {
  const api = API();
  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));
  const { item, synchronized, loading } = state;

  useEffect(() => {
    let localStorageItem = localStorage.getItem(itemName);
    let parseItem;

    if (!localStorageItem) {
      /** Start the empty app */
      // localStorage.setItem(itemName, JSON.stringify(initialValue))
      // parseItem = initialValue

      /** Start app with default values */
      localStorage.setItem(itemName, JSON.stringify(api));
      parseItem = JSON.parse(localStorage.getItem(itemName));
    } else {
      parseItem = JSON.parse(localStorageItem);
    }

    dispatch({ type: actionTypes.update_item, payload: parseItem });
    dispatch({ type: actionTypes.synchronized });
    dispatch({ type: actionTypes.loading });
  }, [synchronized]);

  const synchronizedTask = () => {
    dispatch({ type: actionTypes.synchronizedTask });
  };

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    dispatch({ type: actionTypes.update_item, payload: newItem });
  };

  return { item, saveItem, synchronizedTask, loading };
};

const initialState = ({ initialValue }) => ({
  item: initialValue,
  synchronized: true,
  loading: true,
});

const actionTypes = {
  update_item: "UPDATE_ITEM",
  synchronized: "SYNCHRONIZED",
  synchronizedTask: "SYNCHRONIZED_TASK",
  loading: "LOADING",
};

const reducer = (state, action) => {
  const actions = {
    [actionTypes.update_item]: () => ({ ...state, item: action.payload }),
    [actionTypes.synchronized]: () => ({ ...state, synchronized: true }),
    [actionTypes.synchronizedTask]: () => ({ ...state, synchronized: false }),
    [actionTypes.loading]: () => ({ ...state, loading: false }),
  };
  return actions[action.type]?.() || state;
};

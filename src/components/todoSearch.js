import { useContext } from 'react'
import { TodoContext } from '../contexts'

function TodoSearch() {
  const { value, handleChangeInput } = useContext(TodoContext)

  return (
    <>
      <input
        className="todo__search"
        type="text"
        value={value}
        placeholder="Search Task"
        onChange={handleChangeInput}
      />
    </>
  )
}
export { TodoSearch }

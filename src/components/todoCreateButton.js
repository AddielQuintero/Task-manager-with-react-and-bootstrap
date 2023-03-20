import { useContext } from 'react'
import { TodoContext } from '../contexts'
import Button from 'react-bootstrap/Button'

function TodoCreateButton() {
  const { handleAddTask } = useContext(TodoContext)

  return (
    <Button className="todo__button rounded-circle " onClick={handleAddTask}>
      <i className="bi bi-plus"></i>
    </Button>
  )
}
export { TodoCreateButton }

import { useState } from 'react'
import { TodoCheckbox } from './todoCheckbox'

function TodoItem(props) {
  const { todo, onComplete, onDelete } = props
  const { id, description, completed } = todo

  const [check, setCheck] = useState(completed)

  const handleCheck = () => {
    setCheck(!check)
  }

  return (
    <li className={`todo__item ${check ? 'todo__item--completed' : ''}`}>
      <TodoCheckbox
        id={id}
        completed={check}
        handleChange={handleCheck}
        onClick={() => onComplete(id)}
      />

      <div className="todo__item--content">
        <p className={check ? 'todo__item--content-completed' : null}>
          {description}
        </p>
        <span onClick={() => onDelete(id)}>
          <i className="bi bi-trash"></i>
        </span>
      </div>
    </li>
  )
}

export { TodoItem }

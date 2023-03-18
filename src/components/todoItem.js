import { useState } from 'react'
import { TodoCheckbox } from './todoCheckbox'

function TodoItem(props) {
  // console.log(props)
  const { todo, onComplete, onDelete } = props
  // console.log(todo)
  const { id, text, completed } = todo
  // console.log(`complete en todoItem ${completed}`)

  const [check, setCheck] = useState(completed)
  // console.log(`check  en todoItem ${check}`)

  const handleCheck = () => {
    setCheck(!check)
  }

  return (
    <li className={`todo__item ${check ? 'todo__item--completed' : ''}`}>
      <TodoCheckbox
        completed={check}
        text={text}
        handleChange={handleCheck}
        onClick={() => onComplete(id)}
      />

      <div className="todo__item--content">
        <p className={check ? 'todo__item--content-completed' : null}>{text}</p>
        <span onClick={() => onDelete(id)}>
          <i className="bi bi-trash"></i>
        </span>
      </div>
    </li>
  )
}

export { TodoItem }

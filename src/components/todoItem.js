import React, { useState } from 'react'
import { TodoCheckbox } from './todoCheckbox'
// import Form from 'react-bootstrap/Form'

function TodoItem(props) {
  // console.log(props)
  const { todo, onComplete, onDelete } = props
  // console.log(todo)
  const { text, completed } = todo
  // console.log(`complete en todoItem ${completed}`)

  const [check, setCheck] = useState(completed)
  // console.log(`check  en todoItem ${check}`)

  const handleCheck = () => {
    setCheck(!check)
  }

  // const handleDeleted = () => {
  //   console.log(`borraste ${text}`)
  // }

  return (
    <li className={`todo__item ${check ? 'todo__item--completed' : ''}`}>
      <TodoCheckbox completed={check} text={text} handleChange={handleCheck} />

      <div className="todo__item--content">
        <p className={check ? 'todo__item--content-completed' : null}>{text}</p>
        <span>
          <i className="bi bi-trash"></i>
        </span>
      </div>
    </li>
  )
}

export { TodoItem }

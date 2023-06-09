import { useState, useEffect } from 'react'
import { CustomCheckbox } from '../components'

function TaskItem(props) {
  const { task, onComplete, onDelete } = props
  const { id, description, completed } = task
  const [check, setCheck] = useState(completed)

  const handleCheck = () => {
    setCheck(!check)
  }

  useEffect(() => {
    setCheck(completed)
  }, [completed])

  return (
    <li className={`task__item ${check ? 'task__item--completed' : ''}`}>
      <CustomCheckbox
        type="checkbox"
        id={id}
        completed={check}
        handleChange={handleCheck}
        onClick={() => onComplete(id)}
      />

      <div className="task__item--content">
        <p className={check ? 'task__item--content-completed' : null}>
          {description}
        </p>
        <span onClick={() => onDelete(id)}>
          <i className="bi bi-trash"></i>
        </span>
      </div>
    </li>
  )
}

export { TaskItem }

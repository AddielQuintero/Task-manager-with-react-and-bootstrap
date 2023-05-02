import { useState, useEffect } from 'react'
import { CustomCheckbox } from './common'
import { useNavigate } from 'react-router-dom'

export const ItemTask = (props) => {
  const { task, onComplete, onDelete, onEdit } = props
  const { id, description, completed } = task
  const [check, setCheck] = useState(completed)

  const navigate = useNavigate()

  const handleCheck = () => {
    setCheck(!check)
  }

  useEffect(() => {
    setCheck(completed)
  }, [completed])

  return (
    <li className={`task__item ${check ? 'task__item--completed' : ''}`}>
      <CustomCheckbox
        className="custom__checkbox"
        type="checkbox"
        id={id}
        completed={check}
        handleChange={handleCheck}
        onClick={() => onComplete(id)}
      />

      <div className="task__item--content">
        <p className={check ? 'task__item--content-completed' : null}>{description}</p>

        <div className="d-flex gap-3">
          <span onClick={() => navigate(`/edit/${id}`, { state: { task } })}>
            <i className="bi bi-pencil"></i>
          </span>
          <span onClick={() => onDelete(id)}>
            <i className="bi bi-trash"></i>
          </span>
        </div>
      </div>
    </li>
  )
}

// export { TaskItem }

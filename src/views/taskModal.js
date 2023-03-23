import React, { useContext, useState } from 'react'
import Form from 'react-bootstrap/Form'
import { CustomModal, CustomInput, CustomButton } from '../components'
import { TaskContext } from '../contexts'

const TaskModal = () => {
  const { show, handleAddTask, handleClose } = useContext(TaskContext)

  const [newValue, setNewValue] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    handleAddTask(newValue)
    handleClose()
    setNewValue('')
  }

  const onClose = () => {
    handleClose()
    setNewValue('')
  }

  const handleChangeSubmit = (event) => {
    setNewValue(event.target.value)
  }

  return (
    <CustomModal className='task__modal' show={show} onHide={onClose} title="Add new task">
      <React.Fragment>
        <Form onSubmit={onSubmit} className="test">
          <CustomInput
            className="input__add-task mb-3"
            type="text"
            placeholder=""
            value={newValue}
            onChange={handleChangeSubmit}
          />
        </Form>
      </React.Fragment>

      <React.Fragment>
        <CustomButton
          className="border-0"
          variant="secondary"
          onClick={onClose}
        >
          Close
        </CustomButton>
        <CustomButton
          type="submit"
          className="task__save-button"
          onClick={onSubmit}
        >
          Save
        </CustomButton>
      </React.Fragment>
    </CustomModal>
  )
}

export { TaskModal }

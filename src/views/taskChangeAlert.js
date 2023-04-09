import React, { useContext } from 'react'
import { CustomModal, CustomButton } from '../components'
import { useStorageListener } from '../hooks'
import { TaskContext } from '../contexts'

export const TaskChangeAlert = () => {
  const { sincronizedTask } = useContext(TaskContext)
  const { show, toggleShow, handleClose } = useStorageListener(sincronizedTask)

  return (
    <CustomModal className="task__modal" show={show} onHide={handleClose}>
      <React.Fragment>
        <p>An update has been detected in another window.</p>
        <p>Do you want to update this page now? </p>
      </React.Fragment>
      <React.Fragment>
        <CustomButton onClick={toggleShow}>Update</CustomButton>
      </React.Fragment>
    </CustomModal>
  )
}

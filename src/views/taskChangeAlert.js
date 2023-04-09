import React from 'react'
import { CustomModal, CustomButton } from '../components'
import { useStorageListener } from '../hooks'

export const TaskChangeAlert = ({ sincronized }) => {
  const { show, toggleShow, handleClose } = useStorageListener(sincronized)

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

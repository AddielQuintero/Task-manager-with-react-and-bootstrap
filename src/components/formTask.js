import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import { CustomTextArea, CustomButton } from './common'
import { useTask } from '../hooks'

export const FormTask = (props) => {
  const [value, setValue] = useState('')
  const {
    stateUpdaters: { handleAddTask, handleUpdateTask },
  } = useTask()
  const navigate = useNavigate()
  const location = useLocation()
  const { task } = location.state || {}

  // console.log(task)

  useEffect(() => {
    setValue(task?.description || '')
  }, [])

  const handleChangeSubmit = ({ target }) => {
    setValue(target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const updatedProduct = { id: task?.id, description: value }
    task ? handleUpdateTask(updatedProduct) : handleAddTask(value)
    setValue('')
    navigate('/')
  }

  return (
    <Container className="new__task py-5">
      <Row>
        <div className="border-bottom">
          <h3>{props.title}</h3>
        </div>
        <div className="mt-4">
          <Form onSubmit={onSubmit}>
            <CustomTextArea
              className="custom__textArea textArea__new-task my-3"
              type="text"
              placeholder={props.placeholder}
              value={value}
              onChange={handleChangeSubmit}
              maxLength="150"
            />
          </Form>
          <div className="d-flex justify-content-end gap-2">
            <CustomButton
              className="button__new-task border-0"
              variant="secondary"
              onClick={() => navigate('/')}
            >
              Go back
            </CustomButton>
            <CustomButton type="submit" className="button__new-task " onClick={onSubmit}>
              Save
            </CustomButton>
          </div>
        </div>
      </Row>
    </Container>
  )
}

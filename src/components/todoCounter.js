// import React from 'react'
import { TodoProgressBar } from './todoProgressBar'
import { Row, Col } from 'react-bootstrap'

function TodoCounter(props) {
  const { todo } = props
  const max = todo.length
  const Now = todo.filter((element) => element.completed).length

  return (
    <Row className="todo__counter w-100 mx-0 mb-2">
      <Col xs={6} className="px-0">
        <h1 className="">App</h1>
        <h1 className="">tasks</h1>
      </Col>
      <Col xs={6} className="d-flex justify-content-end align-items-end px-0">
        <span>{`${max - Now} task left`}</span>
      </Col>
      <Col className="todo__progress-bar px-0">
        <TodoProgressBar max={max} now={Now} />
      </Col>
    </Row>
  )
}
export { TodoCounter }

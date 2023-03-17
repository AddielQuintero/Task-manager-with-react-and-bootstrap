// import React from 'react'
import { TodoProgressBar } from './todoProgressBar'
import { Row, Col } from 'react-bootstrap'

function TodoCounter() {
  const { max, now } = { max: 4, now: 1 }

  return (
    <Row className="">
      <Col xs={6} className="px-0">
        <h1 className="">App</h1>
        <h1 className="">tasks</h1>
      </Col>
      <Col xs={6} className="d-flex justify-content-end align-items-end px-0">
        <span>{`${max - now} task left`}</span>
      </Col>
      <Col className="todo__progress-bar px-0">
        <TodoProgressBar max={max} now={now} />
      </Col>
    </Row>
  )
}
export { TodoCounter }

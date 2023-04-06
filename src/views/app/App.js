import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useTask } from '../../hooks'
import {
  TaskCounter,
  TaskSearch,
  TaskList,
  TaskItem,
  TaskAdd,
  TaskModal,
  EmptyState,
  ResultState,
} from '../index'

function App() {
  const {
    taskSearch,
    taskTotal,
    value,
    show,
    max,
    now,
    percent,
    handleChangeInput,
    handleCompleteTask,
    handleDeleteTask,
    handleAddTask,
    handleShow,
    handleClose,
  } = useTask()

  return (
    <React.Fragment>
      <Container className="task__container py-5">
        <Row className="task__row m-auto py-3 align-content-start">
          <Col sm={12} className="d-flex align-items-center">
            <TaskCounter max={max} now={now} percent={percent} />
          </Col>
          <Col sm={12} className="py-2">
            <TaskSearch value={value} handleChangeInput={handleChangeInput} />
          </Col>
          <Col sm={12} className="overflow-hidden h-50">
            <TaskList
              value={value}
              taskSearch={taskSearch}
              taskTotal={taskTotal}
              onEmpty={() => <EmptyState />}
              onResult={() => <ResultState value={value} />}
              task={(task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onComplete={handleCompleteTask}
                  onDelete={handleDeleteTask}
                />
              )}
            >
              {/* {(task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onComplete={handleCompleteTask}
                  onDelete={handleDeleteTask}
                />
              )} */}
            </TaskList>
          </Col>
          <Col
            sm={12}
            className="position-absolute bottom-0 d-flex justify-content-end pt-4 pb-3"
          >
            <TaskAdd handleShow={handleShow} />
          </Col>
        </Row>
      </Container>
      <TaskModal
        show={show}
        handleAddTask={handleAddTask}
        handleClose={handleClose}
      />
    </React.Fragment>
  )
}

export { App }

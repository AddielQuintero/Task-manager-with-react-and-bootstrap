import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useTask, useModal, useSearch } from '../../hooks'
import {
  TaskCounter,
  TaskSearch,
  TaskList,
  TaskItem,
  TaskAdd,
  TaskModal,
  TaskChangeAlert,
  EmptyState,
  LoadingState,
  ResultState,
} from '../index'

function App() {
  const [showModal, handleShowModal, handleCloseModal] = useModal()
  const { state, stateUpdaters } = useTask()
  const { tasks, max, now, percent, loading } = state
  const { sincronizedTask, handleCompleteTask, handleDeleteTask, handleAddTask } = stateUpdaters
  const { value, taskSearch, taskTotal, handleChangeInput } = useSearch(tasks)

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
              loading={loading}
              taskSearch={taskSearch}
              taskTotal={taskTotal}
              onLoading={() => <LoadingState />}
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
              {/* {(task) => (<TaskItem key={task.id} task={task} onComplete={handleCompleteTask} onDelete={handleDeleteTask}/>)} */}
            </TaskList>
          </Col>
          <Col
            sm={12}
            className="position-absolute bottom-0 d-flex justify-content-end pt-4 pb-3"
          >
            <TaskAdd handleShow={handleShowModal} />
          </Col>
        </Row>
      </Container>
      <TaskModal
        show={showModal}
        handleAddTask={handleAddTask}
        handleClose={handleCloseModal}
      />
      <TaskChangeAlert sincronized={sincronizedTask} />
    </React.Fragment>
  )
}

export { App }

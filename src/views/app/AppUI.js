import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { TaskContext } from '../../contexts'
import {
  TaskCounter,
  TaskSearch,
  TaskList,
  TaskItem,
  TaskAdd,
  TaskModal,
  EmptyState,
} from '../index'

function AppUi() {
  const { taskSearch, taskTotal, handleCompleteTask, handleDeleteTask } =
    useContext(TaskContext)
  return (
    <React.Fragment>
      <Container className="task__container py-5">
        <Row className="task__row m-auto py-3 align-content-start">
          <Col sm={12} className="d-flex align-items-center">
            <TaskCounter />
          </Col>
          <Col sm={12} className="py-2">
            <TaskSearch />
          </Col>
          <Col sm={12} className="overflow-hidden h-50">
            <TaskList>
              {/* {loading && <TaskLoading />} */}
              {!taskTotal && <EmptyState />}
              {taskSearch.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onComplete={handleCompleteTask}
                  onDelete={handleDeleteTask}
                />
              ))}
            </TaskList>
          </Col>
          <Col
            sm={12}
            className="position-absolute bottom-0 d-flex justify-content-end pt-4 pb-3"
          >
            <TaskAdd />
          </Col>
        </Row>
      </Container>
      <TaskModal />
    </React.Fragment>
  )
}

export { AppUi }

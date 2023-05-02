import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useTask, useModal, useSearch } from '../../hooks'
import { EmptyState, LoadingState, ResultState } from '../Screens'
import { CounterTask, SearchTask, ListTask, ItemTask, AddTask, ChangeAlertTask } from '../../components'
import { useNavigate } from 'react-router-dom'

function Home() {
  const { state, stateUpdaters } = useTask()
  const { tasks, max, now, percent, loading } = state
  const { synchronizedTask, handleCompleteTask, handleDeleteTask, handleUpdateTask } = stateUpdaters
  const { value, taskSearch, taskTotal, handleChangeInput } = useSearch(tasks)
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <Container className="task__container py-5">
        <Row className="task__row m-auto py-3 align-content-start">
          <Col sm={12} className="d-flex align-items-center">
            <CounterTask max={max} now={now} percent={percent} />
          </Col>
          <Col sm={12} className="py-2">
            <SearchTask value={value} handleChangeInput={handleChangeInput} />
          </Col>
          <Col sm={12} className="overflow-hidden h-50">
            <ListTask
              value={value}
              loading={loading}
              taskSearch={taskSearch}
              taskTotal={taskTotal}
              onLoading={() => <LoadingState />}
              onEmpty={() => <EmptyState />}
              onResult={() => <ResultState value={value} />}
              task={(task) => (
                <ItemTask
                  key={task.id}
                  task={task}
                  onComplete={handleCompleteTask}
                  onDelete={handleDeleteTask}
                />
              )}
            >
              {/* {(task) => (<TaskItem key={task.id} task={task} onComplete={handleCompleteTask} onDelete={handleDeleteTask}/>)} */}
            </ListTask>
          </Col>
          <Col sm={12} className="position-absolute bottom-0 d-flex justify-content-end pt-4 pb-3">
            <AddTask handleNavigate={() => navigate('/new')} />
          </Col>
        </Row>
      </Container>
      <ChangeAlertTask synchronized={synchronizedTask} />
    </React.Fragment>
  )
}

export { Home }

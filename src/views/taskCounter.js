import { useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import { TaskContext } from '../contexts'
import { CustomProgressBar } from '../components'
import { FormatDate } from '../utilities'

function TaskCounter() {
  const { tasks } = useContext(TaskContext)
  const max = tasks.length
  const now = tasks.filter((element) => element.completed).length
  let percent = Math.round((now / max) * 100) || 0

  return (
    <Row className="task__counter w-100 mx-0 mb-2">
      <Col xs={6} className="px-0">
        <h1>App</h1>
        <h1>tasks</h1>
      </Col>
      <Col
        xs={6}
        className="d-flex flex-column justify-content-between align-items-end px-0"
      >
        <FormatDate />
        <span>{`${max - now} task left`}</span>
      </Col>
      <Col className="task__progress-bar px-0 pt-1">
        <CustomProgressBar max={max} now={now}  />
        <p>{`${percent}% Completed`}</p>
      </Col>
    </Row>
  )
}
export { TaskCounter }

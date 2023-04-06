import { Row, Col } from 'react-bootstrap'
import { CustomProgressBar } from '../components'
import { FormatDate } from '../utilities'

export const TaskCounter = ({ max, now, percent }) => {
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
        <CustomProgressBar max={max} now={now} />
        <p>{`${percent}% Completed`}</p>
      </Col>
    </Row>
  )
}

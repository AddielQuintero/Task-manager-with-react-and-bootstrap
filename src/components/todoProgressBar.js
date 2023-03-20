import ProgressBar from 'react-bootstrap/ProgressBar'

function TodoProgressBar(props) {
  const { max, now } = props
  // console.log(props)
  let percent = Math.round((now / max) * 100) || 0
  return (
    <>
      <ProgressBar max={max || 1} now={now} />
      <p>{`${percent}% Completed`}</p>
    </>
  )
}

export { TodoProgressBar }

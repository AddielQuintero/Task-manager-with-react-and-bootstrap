import ProgressBar from 'react-bootstrap/ProgressBar'

function CustomProgressBar(props) {
  return (
    <>
      <ProgressBar
        key={props.key}
        max={props.max || 1}
        now={props.now}
        min={props.min}
        label={props.label}
        variant={props.variant}
        animated={props.animated || false}
        striped={props.striped || false}
      />
    </>
  )
}

export { CustomProgressBar }

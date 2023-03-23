import Form from 'react-bootstrap/Form'

function CustomCheckbox(props) {
  return (
    <Form
      key={`key-${props.id}`}
      className={`custom__checkbox ${props.className ?? ''}`}
    >
      <Form.Check
        type={props.type || 'checkbox'}
        id={props.id}
        checked={props.completed}
        onChange={props.handleChange}
        onClick={props.onClick}
        label={props.label}
      />
    </Form>
  )
}

export { CustomCheckbox }

import Form from 'react-bootstrap/Form'

export const CustomCheckbox = (props) => {
  return (
    <Form
      key={`key-${props.id}`}
      className={props.className ?? ''}
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

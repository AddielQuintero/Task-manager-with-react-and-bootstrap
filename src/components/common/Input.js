import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

export const CustomInput = (props) => {
  return (
    <InputGroup>
      <Form.Control
        className={props.className}
        type={props.type || 'text'}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </InputGroup>
  )
}

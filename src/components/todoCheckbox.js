import Form from 'react-bootstrap/Form'

function TodoCheckbox(props) {
  const { id, completed, handleChange, onClick } = props

  return (
    <>
      <div key={`key-${id}`} className="todo__item-checkbox">
        <Form.Check
          type="checkbox"
          id={id}
          checked={completed}
          onChange={handleChange}
          onClick={onClick}
        />
      </div>
    </>
  )
}

export { TodoCheckbox }

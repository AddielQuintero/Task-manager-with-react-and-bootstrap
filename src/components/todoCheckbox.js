import Form from 'react-bootstrap/Form'

function TodoCheckbox(props) {
  // console.log(props)
  const { text, completed, handleChange } = props
  // console.log(`complete en Checkbox ${completed}`)
  const replaceSpace = (str) => {
    return str.replace(/\s+/g, '-')
  }

  return (
    <>
      <div key={`key-${text}`} className="todo__item-checkbox">
        <Form.Check
          type="checkbox"
          id={replaceSpace(text)}
          checked={completed}
          onChange={handleChange}
        />
      </div>
    </>
  )
}

export { TodoCheckbox }

import Button from 'react-bootstrap/Button'

function TodoCreateButton(props) {
  const { onClick } = props
  // console.log(props)
  const add = () => {
    console.log('adicionando new task')
  }

  return (
    <Button className="todo__create rounded-circle" onClick={onClick}>
      <i className="bi bi-plus"></i>
    </Button>
  )
}
export { TodoCreateButton }

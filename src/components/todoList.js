function TodoList(props) {
  return (
    <ul className="todo__ul">
      {props.children}
    </ul>
  ) 
}

export { TodoList }

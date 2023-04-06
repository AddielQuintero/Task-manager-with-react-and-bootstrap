export const TaskList = (props) => {
  return (
    <ul className="task__ul">
      {!props.taskTotal && props.onEmpty()}
      {props.taskSearch.map(props.task)}
    </ul>
  )
}

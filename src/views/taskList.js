export const TaskList = (props) => {
  const render = props.children || props.task

  return (
    <ul className="task__ul">
      {!props.taskTotal && !props.value.length >= 1 && props.onEmpty()}
      {!props.taskTotal && props.value.length >= 1 && props.onResult()}
      {props.taskSearch.map(render)}
    </ul>
  )
}

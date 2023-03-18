function TodoSearch(props) {
  // console.log(props)
  const { value, handleChange } = props

  return (
    <>
      <input
        className="todo__search"
        type="text"
        value={value}
        placeholder="Search Task"
        onChange={handleChange}
      />
    </>
  )
}
export { TodoSearch }

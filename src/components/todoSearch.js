function TodoSearch(props) {
    // console.log(props)
  const { value, handleChange } = props

  return (
    <>
      <input
        type="text"
        value={value}
        placeholder="Search Task"
        onChange={handleChange}
      />
    </>
  )
}
export { TodoSearch }

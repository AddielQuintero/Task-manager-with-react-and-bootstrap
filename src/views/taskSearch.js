import { useContext } from 'react'
import { TaskContext } from '../contexts'
import { CustomInput } from '../components'

const TaskSearch = () => {
  const { value, handleChangeInput } = useContext(TaskContext)
  return (
    <CustomInput
      type="text"
      className="custom__input"
      placeholder="Search Task"
      value={value}
      onChange={handleChangeInput}
    />
  )
}

export { TaskSearch }

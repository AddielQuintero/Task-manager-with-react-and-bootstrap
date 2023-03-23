import { useContext } from 'react'
import { TaskContext } from '../contexts'
import { CustomButton } from '../components'

const TaskAdd = () => {
  const { handleShow } = useContext(TaskContext)

  return (
    <CustomButton className="p-3 rounded-circle" onClick={handleShow}>
      <i className="bi bi-plus"></i>
    </CustomButton>
  )
}
export { TaskAdd }

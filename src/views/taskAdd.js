import { CustomButton } from '../components'

export const TaskAdd = ({ handleShow }) => {
  return (
    <CustomButton className="p-3 rounded-circle" onClick={handleShow}>
      <i className="bi bi-plus"></i>
    </CustomButton>
  )
}

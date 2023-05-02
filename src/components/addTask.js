import { CustomButton } from './common'

export const AddTask = ({ handleNavigate }) => {
  return (
    <CustomButton className="p-3 rounded-circle" onClick={handleNavigate}>
      <i className="bi bi-plus"></i>
    </CustomButton>
  )
}

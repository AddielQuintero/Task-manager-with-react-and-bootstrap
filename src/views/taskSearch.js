import { CustomInput } from '../components'

export const TaskSearch = ({ value, handleChangeInput }) => {
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

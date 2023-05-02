import { CustomInput } from './common'

export const SearchTask = ({ value, handleChangeInput }) => {
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

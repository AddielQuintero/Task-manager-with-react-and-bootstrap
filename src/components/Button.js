import Button from 'react-bootstrap/Button'

export const CustomButton = (props) => {
  return (
    <Button
      type={props.type}
      key={props.key}
      className={props.className}
      variant={props.variant}
      active={props.active}
      disabled={props.disable}
      size={props.size}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  )
}

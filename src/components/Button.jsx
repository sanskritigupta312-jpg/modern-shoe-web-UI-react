import { MdMessage } from "react-icons/md"


const Button = (props) => {
  return (
    <button className="button-common">
        {props.icons}
        {props.text}
    </button>
  )
}

export default Button
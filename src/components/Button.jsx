import { MdMessage } from "react-icons/md"

const Button = (props) => {
  return (
    <button className="text-white bg-black p-4 flex justify-center items-center gap-2 font-semibold rounded-md min-w-65 hover:bg-gray-800 transition duration-300">
        {props.icons}
        {props.text}
    </button>
  )
}

export default Button

import { createPortal } from "react-dom"
const PopUp = ({copied}) => {
  return createPortal (
    <div>

        {copied &&(<div style={{position:'absolute',bottom:'3rem'}}>
            Copied to ClipBoard
        </div>)}
    </div>,document.querySelector("#box")
  )
}

export default PopUp

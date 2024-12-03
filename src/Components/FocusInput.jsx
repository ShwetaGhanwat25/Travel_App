import { useRef } from "react"
const FocusInput =()=>{

    const inputRef = useRef(null)  // objject  is null
    const handleFocus =()=>{
        inputRef.current.focus()
    }
    return(
        <div>
            <input ref={inputRef} type="text" placeholder="click on button"/>
            <button onClick={handleFocus}> Focus Input</button>
        </div>
    )
}
export default FocusInput
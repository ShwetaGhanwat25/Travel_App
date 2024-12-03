
//jsx
import { useEffect, useRef, useState} from "react";

const Counter = ()=>{
    const prevCountRef = useRef(0)
    const[countValue,setCountValue] = useState(0) //
    const handInc =()=>{
        setCountValue(countValue+40)
    }
    // 
    useEffect(()=>{
        prevCountRef.current = countValue
    },[countValue])
    return(
        <div>
            {/* //content along with tag = element */}
            <p> Count Value = {countValue}</p>  
            <button onClick={handInc}> Icrement </button>
            <p> Previous Counter Value = {prevCountRef.current}</p>
        </div> 
    )
}
export default Counter

//useref to store previous count
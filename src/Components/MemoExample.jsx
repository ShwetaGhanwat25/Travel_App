import { useMemo, useState } from "react"

function MemoExample(){
    //commponent rerender when state/ props/ data changes
    const [count ,setCount] =useState(0)
    const [inputValue, setInputValue] = useState('')
    const expensiveCalculation =useMemo(()=>{
        console.log("usememo is running")
        return (count * 5000 )
    },[count])
    const handleChnnge =(e)=>{
        setInputValue(e.target.value)
    }
    return(
        <>
        <input 
            type ="text"
            value={inputValue}
            placeholder="input"
            onChange={handleChnnge}/>
            <h2>
                useMemo Hook Example
            </h2>
            <p> Input Value ={inputValue}</p>
            <p> Count : {count}</p>
            <button onClick={()=>setCount(count+1)}> Increment </button>
            <p> Memoized Value : {expensiveCalculation}</p>
        </>   
    )
}
export default MemoExample
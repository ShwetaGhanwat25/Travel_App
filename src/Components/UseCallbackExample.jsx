// import {useCallback, useState} from "react"
// function CallBackExample (){
//     const [count ,setCount] =useState(0)
//     const [inputValue, setInputValue] = useState('')
//     const handleClick = useCallback (()=>{
//         console.log(`button clicked from child componentn.current input value is ${inputValue}`)

//     },[inputValue])
//     const handleChnnge =(e)=>{
//         setInputValue(e.target.value)
//     }
//     return(
//         <div>
//              <h2>
//                 UseCallback Hook Example
//             </h2>
//             <input 
//             type ="text"
//             value={inputValue}
//             placeholder="input"
//             onChange={handleChnnge}/>
           
//             <p> Input Value ={inputValue}</p>
//             <p> Count : {count}</p>
//             <button onClick={()=>setCount(count+1)}> Increment </button>
//             <ChildComponent handleClick={handleClick}/>
//         </div>
//     )
// }

// const ChildComponent =({handleClick})=>{
//     return (
//         <div>
//             <button onClick={handleClick}> Click Me</button>
//         </div>
//     )
// }

// export default CallBackExample



import {useCallback, useState} from "react"
function CallBackExample (){
    const [count ,setCount] =useState(0)
    const [inputValue, setInputValue] = useState('')
    
    const handleChnnge =(e)=>{
            setInputValue(e.target.value)
            }

        const handleInc = useCallback(()=>{
            console.log("in usecallback memoised fun") 
            setCount(count+1)
        },[count])
    return(
        <div>
             <h2>
                UseCallback Hook Example
            </h2>
            <input 
            type ="text"
            value={inputValue}
            placeholder="input"
            onChange={handleChnnge}/>
           
            <p> Input Value ={inputValue}</p>
            <p> Count : {count}</p>
            <button onClick={handleInc}> Increment </button>
            <button onClick={()=>setCount(count-1)}> dec </button>
        </div>
    )
}

export default CallBackExample




// send the function state as a props


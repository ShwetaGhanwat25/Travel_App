import { useState } from "react"


//localStorage.setItem('username' ,userName)
//localstorage.getItem('key')

//localStorage.removeItem('key') // remove perticular key dta
//localStorage.clear() // all teh data
const Storage =()=>{
    const [userName,setUserName] = useState('')
    const [employeeId, setEmployeeId] =useState ('')

    const handleUserName =()=>{
        localStorage.setItem('name' ,userName)
        alert("saved username into localstorage")
    }
    const handleEmployeeId =()=>{
        localStorage.setItem('employeeId',employeeId)
        alert("saved employeeId into localstorage")
    }

    const handleClear =()=>{
        localStorage.clear()
        alert("all data cleared")
    }
    const deleteOneItem = ()=>{
        localStorage.removeItem('name')
        alert("removed name")
    }

    const getValue = localStorage.getItem('name')
    
    return(
        <div>
            <input type="text" 
            value={userName} 
            placeholder="enter your username" 
            onChange={(e)=>setUserName(e.target.value)}
            />
            <p> username : {userName}</p>
            <button onClick={handleUserName}> Saved Username</button>
            <br/>
            <br/>
            <input type="text" 
            value={employeeId} 
            placeholder="enter your EmployeeId" 
            onChange={(e)=>setEmployeeId(e.target.value)}
            />
            <br/>
            <br/>
            <button onClick={handleEmployeeId}> Saved EmployeeId</button>

           
            <p> employeeID : {employeeId}</p>

            <p> getting value from localstorgae  {getValue}</p>
            <br/>
            <button onClick={handleClear}> clear localStorage</button>
            <br/>
            <button onClick={deleteOneItem}> clear one item</button>
        </div>
    )
}
export default Storage
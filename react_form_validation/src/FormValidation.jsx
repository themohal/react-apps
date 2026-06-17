import React, { useState } from 'react'



function FormValidation() {
    const [email, setemail] = useState("")
    const [password,setPassword] = useState("")
    const [err,setError] = useState(false)
    const [passErr,setPassErr] = useState(false)
    function loginForm(e){

        if (email.length<3 || password.length<5){
            alert("Bhai form fill thek sy kro...!")
        }else{
            console.log(email)
            console.log(password)
        }
        e.preventDefault()
    }
    function emailHander(e){
        // console.log(e.target.value)
        
        let elm = e.target.value
        if (elm.length<3){
            // console.log("Minimum three letter required")
            setError(true)
        }
        else{
            setError(false)
        }
        setemail(elm)
    }
    function PasswdHandler(e){
         let elm = e.target.value
        if (elm.length<5){
            // console.log("Minimum three letter required")
            setPassErr(true)
        }
        else{
            setPassErr(false)
        }
        setPassword(elm)
        
    }
    return (
        <>
    <h1>FormValidation</h1>
    <form onSubmit={loginForm}>
    
    <input type='text' placeholder='Enter your email...' onChange={emailHander}></input>
    {
        err ? <span>Minimum three letter required</span> :<span></span>
    }
    <br></br>
    <br></br>
    <input type='password' placeholder='Enter your password...' onChange={PasswdHandler}></input>
    {
        passErr ? <span>Minimum three letter required</span> :<span></span>
    }
    <br></br>
    <br></br>
    <button type='submit'>Submit</button>
        </form>
    </>

  )
}

export default FormValidation
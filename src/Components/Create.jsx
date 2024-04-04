import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../app/UserSlice'
import { useSelector,useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const Create = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [value,setValue] = useState({first_name:'',email:''})


    function handleSubmit(e){
        e.preventDefault()
       setTimeout(()=>{
        dispatch(createUser(value))
        navigate('/')
        toast("Created");
        setValue({first_name:'',email:''})
        console.log(value);
       },1000)
    }


  return (
    <div className='create'>
    <form onSubmit={handleSubmit}>
    <h1>Create User</h1>
    <input type='text'  id='first_name' placeholder='Enter Your Name' name='first_name'  value={value.first_name} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
    <br/>
    <input type='email' id='email'  placeholder='Enter Your Email' name='email' value={value.email} onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})}/>
    <br/>
    <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Create
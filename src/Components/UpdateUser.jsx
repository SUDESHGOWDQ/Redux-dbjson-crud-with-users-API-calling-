import React, { useEffect, useState } from 'react'
import { useNavigate,useParams} from 'react-router-dom'
import { updateUser } from '../app/UserSlice'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'

const Create = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()
    const [value,setValue] = useState({first_name:'',email:''})



    useEffect(()=>{
      fetch(`http://localhost:3000/users/`+id)
      .then(res=>res.json())
      .then(d=>setValue(d))
    },[])

    const handleSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:3000/users/${id}`, value)
          .then(response => {navigate('/') 
          toast("Updated");
        })
          .catch(error => console.log(error));
  };



  return (
    <div className='create'>
    <form onSubmit={handleSubmit}>
    <h1>Update User</h1>
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
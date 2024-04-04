import React,{useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux';
import { getUsers,deleteUsers} from '../app/UserSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'



const Home = () => {
    const user = useSelector((state)=>state.user.user)
    console.log(user);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUsers())
      },[])


      function handleDelete(Id){
        dispatch(deleteUsers(Id));
        dispatch(getUsers());
        toast("Deleted")
      }


  return (
    <div className='Home'>
    <section>
    <h1>ReduxCrud</h1>
    <Link to={'/create'}><button> Add </button></Link>
    </section>
    <hr></hr>
    <center>
    <table border={'1'} cellSpacing={20} cellPadding={20}>
    <thead>
    <tr>
    <td>Id</td>
    <td>Name</td>
    <td>Email</td>
    <td>Actions</td>
    </tr>
    </thead>
    <tbody>
    {user.length>0 && user.map((user)=>
        {
            return(
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.email}</td>
                <td>
               <Link to={`/update/${user.id}`}><button style={{margin:'10px'}}>Edit</button></Link>
                <button onClick={()=>handleDelete(user.id)}>Delete</button>
                </td>
                </tr>
            )
        }
    )
       
    }
    </tbody>
    </table>
    </center>
    </div>
  )
}

export default Home
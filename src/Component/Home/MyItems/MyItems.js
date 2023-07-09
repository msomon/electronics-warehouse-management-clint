
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import Item from './Item';
import './MyItems.css'

const MyItems = () => {
  const [items,setItems]=useState([]);
const [user] =useAuthState(auth)
const navigate = useNavigate()

  useEffect(()=>{ 

    //  use axios   //
   
    const myItem = async()=>{
      const email = user?.email
      const url = `https://electronics-warehouse-website.onrender.com/myitems?email=${email}`

        
     try{
      const {data} = await axios.get(url,{
        headers :{
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
      
      setItems(data)
     }
     catch(error){
       if(error.response.status === 401 || error.response.status === 403 ){
         signOut(auth)
        navigate('/login')
       }
     }
    }

    myItem()
    
    },[user])
    
    
    
  return (
    <div className='items w-100'>
      {
        items?.map(item=><Item item={item} key={item._id} ></Item>)
      }
    </div>
  );
}


export default MyItems;
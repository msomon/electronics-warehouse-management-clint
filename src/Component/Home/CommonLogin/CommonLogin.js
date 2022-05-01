import React from 'react';
import auth from '../../../firebase.init';
import {useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Google from '../../../images/google.jpg'



const CommonLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const location = useLocation();
 let from = location.state?.from?.pathname ||'/';
  const navigate = useNavigate();


if(user){
  navigate(from ,{replace:true})
}


  return (
    <div>
      <div className='d-flex align-items-center'>
        <div style={{height:'1px'}} className='bg-primary w-50'></div>
        <p className='mt-2 px-2'>or</p>
        <div style={{height:'1px'}} className='bg-primary w-50'></div>
      </div>
      <div className='d-flex mt-2'>
     <button onClick={()=>signInWithGoogle()} className='btn btn-primary w-50 mx-auto'>Google Sign In <span><img height={30} width ={30} src= {Google} alt="" /></span> </button>
    
     </div>
    </div>
  );
};
export default CommonLogin
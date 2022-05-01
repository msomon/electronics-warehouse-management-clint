
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CommonLogin from '../CommonLogin/CommonLogin';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  const Registar = () => {
    const navigate = useNavigate()
  
    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true });
    const [updateProfile,updateError]= useUpdateProfile(auth)
    const [agree,setAgree]= useState(false);
  
    if(loading){
      <p>loading..</p>
    }
  
    const registar =async(event)=>{
      event.preventDefault()
      const name = event.target.name.value
      const email = event.target.email.value
      const password = event.target.password.value
  if(password.length < 6){
    return toast('Please Give More Than 6 Character')
  }
     await createUserWithEmailAndPassword(email,password)
      await updateProfile ({displayName:name})
      toast('Registar Successfully')
      navigate('/login')
    }
    
    const navigateLogin=()=>{
      navigate('/login')
      }
  
    return (
      <div className='container w-50 mx-auto'>
        <h1>Registar Now</h1>
        <Form onSubmit={registar}>
        <Form.Group className="mb-3" controlId="formBasicname">
      <Form.Label>Name</Form.Label>
      <Form.Control required name='name' type="text" placeholder="Name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control name='email' required type="email" placeholder="Enter email" />
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name='password' required type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check className={agree ? "ps-2 text-primary": "ps-2 text-danger"} onClick={()=>setAgree(!agree)} type="checkbox" label="Accept Genius Car Terms and conditions" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Registar
    </Button>
  </Form>
  <p>{error?.message}</p>
  <p className='mt-2'>Have a Account? <span className='text-primary' onClick={navigateLogin}>Please Login </span></p>
  <CommonLogin></CommonLogin>
  
      </div>
    );
};

export default Registar;
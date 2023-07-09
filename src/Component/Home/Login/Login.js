import { Button } from 'react-bootstrap';
import React, { useRef} from 'react';
import { Form } from 'react-bootstrap';
import { useLocation, useNavigate} from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CommonLogin from '../CommonLogin/CommonLogin';
import { toast } from 'react-toastify';
import './Login.css'
import axios from 'axios';


const Login = () => {
  
const navigate= useNavigate();
const [
  signInWithEmailAndPassword,
  user,
  loading,
  error,
] = useSignInWithEmailAndPassword(auth);

const [sendPasswordResetEmail] = useSendPasswordResetEmail(
  auth
);
const location = useLocation()
let from = location.state?.from?.pathname ||'/';


if(user){
  navigate(from ,{replace:true})
}

const handleLogin =async event=>{
event.preventDefault();
const email =event.target.email.value;
const password = event.target.password.value;
await signInWithEmailAndPassword(email, password)
const {data} = await axios.post('https://electronics-warehouse-website.onrender.com/login',{email})

localStorage.setItem('accessToken',data.accessToken)


}


const resetPassword=async(event)=>{
  const email = event.target.email.value;
  await sendPasswordResetEmail(email);
  toast('Reset email');
}



const navigateRegistar=()=>{
navigate('/registar')
}

  return (
    <div className='container mx-auto w-50 mt-5 form'>
      <h1 className='text-primary text-center'> Please login </h1>
      <Form onSubmit={handleLogin}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control  type="email" name='email' placeholder="Enter email" required />

  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control  name='password' type="password" placeholder="Password" required />
  </Form.Group>
  
  <Button variant="primary" type="submit">
   Login
  </Button>

</Form>
<br />
<p className='text-danger'>{error?.message}</p>

     <p className='mt-2'> New Somon Electronics ? <span className='text-primary' onClick={navigateRegistar}>Please Registar </span></p>
     <p className='mt-2'>Forget password ? <span className='text-primary' onClick={resetPassword}>Reset password </span></p>
     <CommonLogin></CommonLogin>
    </div>
  );
};

export default Login;
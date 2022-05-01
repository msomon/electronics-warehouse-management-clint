
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from './Loading/Loading';

const RequireAuth = ({children}) => {
  const [user,loading]=useAuthState(auth)
  const [sendEmailVerification,sending,error]=useSendEmailVerification(auth);
  const location = useLocation()
 if(loading){
  return <Loading></Loading>
 }
      if(!user){
        return <Navigate to='/login' state= {{from:location}}replace></Navigate>
      }
      if(!user.emailVerified){
        return <div>
          <h3 className='text-success'>Please Verify Your Email Address </h3>
          <button onClick={async () => {
              await sendEmailVerification();
              toast('Sent email');
            }}>Send Verification </button>
        </div>
      }
      
      return children
    
};

export default RequireAuth;
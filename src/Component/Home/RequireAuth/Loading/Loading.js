import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
  return (
    <div style={{height:'300px'}} className=' mt-5 w-100 d-flex justify-content-center align-content-center'>
      <Spinner animation='border' variant='primary'></Spinner>
    </div>
  );
};

export default Loading;
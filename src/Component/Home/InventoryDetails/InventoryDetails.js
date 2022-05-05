import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
  const {id}= useParams()
  const [service,setService]=useState({})

  useEffect( ()=>{
    const url =`http://localhost:5000/inventory/${id}`;

  fetch(url)
  .then(res=>res.json())
  .then(data=>setService(data))
    
  },[id])

  console.log(service);
  return (
    <div>
      <h1>inventory details:{id}</h1>
    </div>
  );
};



export default InventoryDetails;
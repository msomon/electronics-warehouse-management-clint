import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryDetails.css'

const InventoryDetails = () => {
  const {id}= useParams()
  const [service,setService]= useState({})
  const {img,_id,name,price,quantity,supplierName,description}=service ;

  useEffect( ()=>{
    const url =`http://localhost:5000/inventory/${id}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>setService(data))
    
  // console.log(url);
  },[])


    const deliveryItem =(event)=>{
      event.preventDefault()
      // const url =`http://localhost:5000/inventory/${id}`;
      // fetch(url,{
      //   method:'Put',
      //   headers:{
      //     'content-type':'application/json'
      //   },
      //   body:JSON.stringify(data)
      // }) 
      // .then(res=>res.json())
      // .then(result=>console.log(result))
    }


  return (
    <div className='cart inventorydetails'>
      <img className='' src={img} alt="" />
      <h4>Product: {name}</h4>
      <h4>Price: {price}</h4>
      <h4>Quantity: {quantity}</h4>
      <h4>Supplier Name: {supplierName}</h4>
      <h5>Description: {description}</h5>
      <div className='text-center'>
      <button onClick={deliveryItem} className='btn btn-success mt-2 me-5'>Delivery Product</button>
      <button className='btn btn-primary mt-2'>Add Quantity</button>
      </div>
    </div>
  );
};



export default InventoryDetails;
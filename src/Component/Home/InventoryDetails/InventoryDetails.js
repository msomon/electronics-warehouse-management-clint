import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryDetails.css'

const InventoryDetails = () => {
  const [service,setService]= useState({})
  const {id}= useParams()
  const {img,_id,name,price,quantity,supplierName,description}=service ;
  
  console.log(service);
  useEffect( ()=>{
    const url =`http://localhost:5000/inventory/${id}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>setService(data))
    
},[])



    const deliveryItem =(event)=>{
      event.preventDefault()

      //  const {quantity, ...rest} = data ;
      //  const newQuantity = (quantity - 1) ;
      //  const updateQunatity ={quantity:newQuantity,rest}
      //  setService(updateQunatity)

      // const url =`http://localhost:5000/inventory/${id}`;
      // fetch(url,{
      //   method:'PUT',
      //   headers:{
      //     'content-type':'application/json'
      //   },
      //   body:JSON.stringify(updateQunatity)
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
      <div className='text-center mb-4 mt-4'>
      <button  className='btn btn-success me-5' onClick={deliveryItem}>Delivery Product</button>
      <div className='clas
      mt-3'>
      <input className='me-2' type="text" name="" placeholder='Add Quantity' id="" />
      <button className='btn btn-primary '>Add Quantity</button>
      </div>
      </div>
    </div>
  );
};



export default InventoryDetails;
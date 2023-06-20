import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'
const Inventory = ({inventory}) => {
  // console.log(inventory.quantity);
  const {img,name,_id,description,price,quantity,supplierName}=inventory;
  // console.log(description.slice(0,100));

  const navigate = useNavigate()

  const navigateDetail= (id) =>{
    navigate(`/inventorydetails/${id}`)
      }
  return (
   
    <div className='cart'>
      <img className='' src={img} alt="" />
      <h4>Product: {name}</h4>
      <h4>Price: {price}</h4>
      <h4>Quantity: {quantity}</h4>
      <h4>Supplier Name: {supplierName}</h4>
      <h5>Description: {description.slice(0,100)}</h5>
      <button onClick={()=>navigateDetail(_id)} className='btn btn-primary rounded-pill'>Update: {name}</button>
    </div>

    
  );
};

export default Inventory;
import React from 'react';
import './Inventory.css'
const Inventory = ({inventory}) => {
  console.log(inventory.img);
  const {img,name,description,price,quantity,supplierName}=inventory;


  return (
    <div className='cart'>
      <img src={img} alt="" />
      <h4>Product:{name}</h4>
      <h4>Price:{price}</h4>
      <h4>Quantity:{quantity}</h4>
      <h4>Supplier Name:{supplierName}</h4>
      <h4>Description:{description}</h4>
    </div>
  );
};

export default Inventory;
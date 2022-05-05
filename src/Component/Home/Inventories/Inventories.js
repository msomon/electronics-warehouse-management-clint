import React from 'react';

const Inventories = ({inventory}) => {
  const {img,name,price,quantity,supplierName,description}=inventory;

  return (
    <div className='cart'>
      <img src={img} alt="" />
      <h4>Product: {name}</h4>
      <h4>Price: {price}</h4>
      <h4>Quantity: {quantity}</h4>
      <h4>Supplier Name: {supplierName}</h4>
      <h5>Description: {description}</h5>
    </div>
  );
};

export default Inventories;
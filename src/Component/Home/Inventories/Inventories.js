import React from 'react';
import useHooks from '../../Hooks/useHooks';
const Inventories = ({inventory}) => {
 
  const {inventories,setInventories}=useHooks()
  const {img,_id,name,price,quantity,supplierName,description}=inventory;
// console.log(quantity);
 

  const deleteInventory=(id)=>{
    // console.log('hallow');
const proceed = window.confirm('are you sure')
if(proceed){
const url =`https://limitless-dawn-19403.herokuapp.com/inventory/${id}`
fetch(url,{
method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  const remaining = inventories.filter(inventory=>inventory._id !==id);
  setInventories(remaining)
})
}
  }



  return (
  
<div>
<div className='cart'>
      <img src={img} alt="" />
      <h4>Product: {name}</h4>
      <h4>Price: {price}</h4>
      <h4>Quantity: {quantity}</h4>
      <h4>Supplier Name: {supplierName}</h4>
      <h5>Description: {description}</h5>
      <div className='mt-4 mb-4 align-center'>
      <button className='btn btn-danger btn-lg' onClick={()=>deleteInventory(_id)}>Delete</button>
      </div>
    </div>
    </div>
  );
};

export default Inventories;
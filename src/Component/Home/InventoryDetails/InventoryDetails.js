
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './InventoryDetails.css'

const InventoryDetails = () => {
  const [service,setService]= useState({})
  const {id}= useParams()
  const {img,_id,name,price,quantity,supplierName,description}=service ;
  
  // console.log(service.description);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  useEffect( ()=>{
    const url =`https://electronics-warehouse-website.onrender.com/inventory/${id}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=>setService(data))
    
},[id])



    const deliveryItem =()=>{
       const {quantity, ...rest} = service ;
      //  console.log(quantity);
      if(quantity < 1){
        return toast('Out Of Stock')
      }
      
        const newQuantity = (quantity - 1) ;
        const updateQunatity ={quantity:newQuantity,...rest}
        setService(updateQunatity)

      const url =`https://electronics-warehouse-website.onrender.com/inventory/${id}`;
      fetch(url,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(updateQunatity)
      }) 
      .then(res=>res.json())
      .then(result=>console.log(result))
    }

    const addQuantity =(event)=>{
      event.preventDefault()
       const {quantity, ...rest} = service ;
      //  console.log(quantity);
      //  console.log(rest);
       const addQuantity =parseInt(event.target.name.value) ;
       const previewQuantity =parseInt(quantity)
      //  console.log(addQuantity ,previewQuantity);
       const newQuantity = previewQuantity + addQuantity ;
      //  console.log(newQuantity);


       const updateQunatity ={quantity:newQuantity,...rest}
      //  console.log(updateQunatity);
       setService(updateQunatity)

      const url =`https://electronics-warehouse-website.onrender.com/inventory/${id}`;
      fetch(url,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(updateQunatity)
      }) 
      .then(res=>res.json())
      .then(result=>console.log(result))
      toast('Add Quantity Successfully')
    }

   
  return (
    <div className='cart h-100 inventorydetails mx-auto'>
      <img className='' src={img} alt="" />
      <h4>Product: {name}</h4>
      <h4>Price: {price}</h4>
      <h4>Quantity: {quantity}</h4>
      <h4>Supplier Name: {supplierName}</h4>
      <h5>Description: {description}</h5>
      <div className='text-center mb-4 mt-4'>
      <button  className='btn btn-success me-5' onClick={()=>deliveryItem(_id)}>Delivery Product</button>
      </div>
      <div className='clas
      mt-3 w-50 mx-auto'>
   <Form onSubmit={addQuantity}>
        <Form.Group className="mb-3" controlId="formBasicname">
  
      <Form.Control required name='name' type="text" placeholder="Add Quantity" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Add Quantity
    </Button>
    </Form>
      </div>
    </div>
  );
};



export default InventoryDetails;
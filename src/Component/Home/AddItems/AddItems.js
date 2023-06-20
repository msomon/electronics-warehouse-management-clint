import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddItems = (event) => {
  const { register, handleSubmit } = useForm();
  const [user]  = useAuthState(auth)
  const onSubmit = data => {

     const product = {
      img :data.img ,
      name : data.name , 
      email : user?.email,
      price : data.price ,
      quantity : data.quantity ,
      supplierName : data.supplierName ,
      description : data.description
      

     }
    console.log(product)
    const url = `https://electronics-warehouse-website.onrender.com/additems`
    fetch(url,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(product)
    }) 
    .then(res=>res.json())
    .then(result=>console.log(result))
    toast('Add Item Succesfully')
  
  }


  return (
    <div className='w-50 mx-auto'>
      <h1 className='mt-3 mb-4'>Please Add Inventory </h1>
      <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='Photo url' className='mb-3' type="text" {...register("img")} />
      <input placeholder='Name' className='mb-3' {...register("name", { required: true, maxLength: 20 })} />
      <input placeholder='Price' className='mb-3' type="number" {...register("price")} />
      <input placeholder='SupplierName' className='mb-3' {...register("supplierName")} />
      <input placeholder='Quantity' className='mb-3' type="number" {...register("quantity")} />
      <input placeholder='Description' className='mb-3' {...register("description")} />
      <input className='btn btn-primary' type="submit" value='Add Inventory'/>
    </form>
    </div>
  );
};

export default AddItems;
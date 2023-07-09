

import { useAuthState } from 'react-firebase-hooks/auth';
import useHooks from '../../Hooks/useHooks';
import './Item.css'
import auth from '../../../firebase.init';


const Items = ({item}) => {
  const [user]=useAuthState(auth)

  
  const {img,_id,name,price,quantity,supplierName,description}=item;
  
  
  const {items,setItems}=useHooks()
  const deleteItem=(id)=>{
   
const proceed = window.confirm('are you sure')
if(proceed){
const url =`https://electronics-warehouse-website.onrender.com/myItems/${id}`
fetch(url,{
method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
  
  const remaining = items.filter(item=>item._id !==id);
  setItems(remaining)
})
}
  }
 

  return (
    <div className='cart px-10 '  >
      <img className='image' src={img} alt="" />
      <h4>Product: {name}</h4>
      <h4>Price: {price}</h4>
      <h4>Quantity: {quantity && quantity}</h4>
      <h4>Supplier Name: {supplierName}</h4>
      <h5>Description: {description?.slice(0,100)}</h5>
      <button disabled={user?.email !="hsomon940@gmail.com" ? true : false } className='btn btn-danger mt-2 mb-2'onClick={()=>deleteItem(_id)} >Delete</button>
    </div>
  );
};

export default Items;
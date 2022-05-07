
import useHooks from '../../Hooks/useHooks';


const Items = ({item}) => {
  // console.log(item);
  
  const {img,_id,name,price,quantity,supplierName,description}=item;
  
  const {items,setItems}=useHooks()
  const deleteItem=(id)=>{
    // console.log('hallow');
const proceed = window.confirm('are you sure')
if(proceed){
const url =`http://localhost:5000/myItems/${id}`
fetch(url,{
method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
  console.log(data)
  const remaining = items.filter(item=>item._id !==id);
  setItems(remaining)
})
}
  }
  
  return (
    <div className='cart'>
      <img className='' src={img} alt="" />
      <h4>Product: {name}</h4>
      <h4>Price: {price}</h4>
      <h4>Quantity: {quantity}</h4>
      <h4>Supplier Name: {supplierName}</h4>
      <h5>Description: {description}</h5>
      <button className='btn btn-danger mt-2 mb-2'onClick={()=>deleteItem(_id)} >Delete</button>
    </div>
  );
};

export default Items;

import useHooks from '../../Hooks/useHooks';


const Items = ({item}) => {
  
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
      <h4>Description: {description}</h4>
      <button className='btn btn-primary'onClick={()=>deleteItem(_id)} >Delete {name}</button>
    </div>
  );
};

export default Items;
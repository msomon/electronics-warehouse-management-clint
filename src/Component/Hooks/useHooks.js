import { useEffect, useState } from 'react';

const useHooks = () => {
  const [inventories,setInventories]=useState([]);
useEffect( ()=>{
fetch('http://localhost:5000/inventory')
.then(res=>res.json())
.then(data=>setInventories(data))

},[])
const [items,setItems]=useState([]);

useEffect(()=>{
fetch('http://localhost:5000/myItems')
.then(res=>res.json())
.then(data=>setItems(data))
},[items])


// console.log(inventories);

return {inventories,setInventories,items,setItems } ;
};

export default useHooks;
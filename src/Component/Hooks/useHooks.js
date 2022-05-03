import { useEffect, useState } from 'react';

const useHooks = () => {
  const [inventories,setInventories]=useState([]);
useEffect( ()=>{
fetch('http://localhost:5000/inventory')
.then(res=>res.json())
.then(data=>setInventories(data))

},[])
console.log(inventories);

return {inventories}
};

export default useHooks;
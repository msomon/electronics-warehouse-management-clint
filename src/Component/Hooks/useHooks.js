import { useEffect, useState } from 'react';

const useHooks = () => {
const [inventories,setInventories]=useState([]);
useEffect( ()=>{
fetch('https://limitless-dawn-19403.herokuapp.com/inventory')
.then(res=>res.json())
.then(data=>setInventories(data))

},[inventories])

const [items,setItems]=useState([]);

useEffect(()=>{
fetch('https://limitless-dawn-19403.herokuapp.com/myitems')
.then(res=>res.json())
.then(data=>setItems(data))
},[items])


// console.log(items);

return {inventories,setInventories,items,setItems}  ;
};

export default useHooks;
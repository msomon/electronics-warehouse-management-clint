
import { useEffect, useState } from 'react';

const useHooks = () => {

const [inventories,setInventories]=useState([]);

useEffect( ()=>{
fetch('https://electronics-warehouse-website.onrender.com/inventory')
.then(res=>res.json())
.then(data=>setInventories(data))

},[inventories])

const [items,setItems]=useState([]);


useEffect(()=>{ 
fetch('https://electronics-warehouse-website.onrender.com/myitems',
  {
    method: 'GET',
    headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
})
.then(res=>res.json())
.then(data=>setItems(data))


//  use axios   //

// const myItems = async()=>{
//   const email = user.email
//   const url = `https://electronics-warehouse-website.onrender.com/myitems?email=${email}`
//  try{
//   const {data} = await axios.get(url,{
//     headers :{
//       authorization: `Bearer ${localStorage.getItem('accessToken')}`
//     }
//   })
//   setItems(data)
//  }
//  catch(error){

//  }
// }
// myItems()


},[items])


return {inventories,setInventories,items,setItems}  ;
};

export default useHooks;
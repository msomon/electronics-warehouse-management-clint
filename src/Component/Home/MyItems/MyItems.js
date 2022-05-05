
import { useEffect, useState } from 'react';
import useHooks from '../../Hooks/useHooks';
import Item from './Item';
import './MyItems.css'

const MyItems = () => {
  const {items,setItems}=useHooks()

  return (
    <div className='items container'>
      {
        items.map(item=><Item item={item} key={item._id} ></Item>)
      }
    </div>
  );
}


export default MyItems;
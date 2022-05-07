
import useHooks from '../../Hooks/useHooks';
import Item from './Item';
import './MyItems.css'

const MyItems = () => {
  const {items}=useHooks()

  return (
    <div className='items'>
      {
        items?.map(item=><Item item={item} key={item._id} ></Item>)
      }
    </div>
  );
}


export default MyItems;
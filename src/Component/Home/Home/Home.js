
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css'
import img1 from '../../../images/img1.webp'
import img2 from '../../../images/img2.webp'
import img3 from '../../../images/img3.webp'
import img4 from '../../../images/img4.webp'
import Inventory from '../Inventory/Inventory';
import useHooks from '../../Hooks/useHooks';
import Review from '../Review/Review';

const Home = () => {
  const {inventories}=useHooks()

// console.log(inventories.quantity);

  return (
    <div className='mt-3'>
     
      <div className='carosel'>
    <Carousel >
    <Carousel.Item>
      <img
        className="d-block w-100 carosel"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3> Welcome My Website </h3>
        <p>Good Quality Producta</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carosel "
        src={img2}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Welcome Newproduct World</h3>
        <p>Quality full Products</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carosel"
        src={img3}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Your Opinion My Commitment</h3>
        <p>
          Highly Good Maintainense 
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 carosel"
        src={img4}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Your Opinion My Commitment</h3>
        <p>
          Highly Trained Service 
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  <div className='inventories'>
  {
    
      inventories.slice(0,6).map(inventory =><Inventory inventory={inventory} key={inventory._id}></Inventory>)
    
  }
  </div>
  <Review></Review>
    </div>
  );
};

export default Home;
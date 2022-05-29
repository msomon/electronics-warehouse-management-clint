import React from 'react';
import './Review.css'
import person1 from '../../../images/person1.webp'
import person2 from '../../../images/person2.webp'
import person3 from '../../../images/person3.webp'

const Review = () => {
  return (
    <div className=''>
      <h2 className='text-center text-success mb-4'>Customer Opinion</h2>
      <div className='reviews'>
      <div className='review'>
      <img src={person1} alt="" />
      <h4 className='mt-3'>Name: Arle Rois</h4>
      <p>Comment: I am setisfied of his work .He is a Good Seller .</p>
      </div>
      <div className='review'>
      <img src={person2} alt="" />
      <h4 className='mt-3'>Name:Hiram Baker</h4>
      <p>Comment: He is very Professetional and pleasure Manager . </p>
      </div>
      <div className='review'>
      <img src={person3} alt="" />
      <h4 className='mt-3'>Name:Kris Moris</h4>
      <p>Comment: Products quality  are awesome and he is brilliant person .</p>
      </div>
      
    </div>
    </div>
  );
};

export default Review;
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

function HomePage() {
  return (
    <MainLayout>
      <div className='bg-light p-5 mt-4 rounded-3'>
        <h1>Welcome to the simple POS for small business</h1>
        <p>Welcome to our user-friendly Point of Sale (POS) system designed specifically for small businesses. We understand the unique needs of small enterprises and have tailored this POS solution to simplify your operations and enhance customer experiences.</p>
        <p>If you have any questions or encounter any issues while using our system, please don't hesitate to reach out to us. You can contact our support team at any time by calling 443-444-xxxx.</p>
        <Link to='/pos' className='btn btn-primary'>Click here to start selling products</Link>
      </div>
    </MainLayout>
  )
}

export default HomePage
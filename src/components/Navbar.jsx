import { Link } from '@nextui-org/react';
import '../App.css';

import React from 'react'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link href="/">Product</Link>
        <Link href="/">Cart</Link>
        </div>
  )
}

export default Navbar
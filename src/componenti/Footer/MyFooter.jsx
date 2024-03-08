import React from 'react';
import MenuFooter from './MenuFooter';

export default function MyFooter({menuFooter}) {
  return (
    <div className='d-flex justify-content-center bg-dark p-3'>
        {menuFooter.map((menu)=> <MenuFooter menu={menu}/>)}
    </div>
  )
}

import React from 'react'
import { Card,Button } from 'react-bootstrap';
import { useState } from 'react';
import './CardBook.css';

export default function CardBook({book}) {
    let {title,img,price}=book;
    const[selected,setSelected]=useState(false);
    function selectBook(){
      setSelected(!selected);
    }
    return (
    <Card className={selected?'m-2 col-3 focusCard cardsel':'m-2 col-3 focusCard'} 
          style={{ width: '16rem',minWidth:'150px'}}
          onClick={selectBook}>
      <Card.Img variant="top" style={{ height: '60%' }} src={img} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">Buy for $ {price}</Button>
      </Card.Body>
    </Card>
  )
}

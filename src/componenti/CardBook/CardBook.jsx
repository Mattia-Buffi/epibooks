import React from 'react'
import { Card,Button } from 'react-bootstrap';

export default function CardBook({book}) {
    let {title,img,price}=book;
    return (
    <Card className='m-2 col' style={{ width: '16rem',minWidth:'150px'}}>
      <Card.Img variant="top" style={{ height: '60%' }} src={img} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary">Buy for $ {price}</Button>
      </Card.Body>
    </Card>
  )
}

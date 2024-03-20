import React from 'react'
import { Card,Button } from 'react-bootstrap';
import { useState } from 'react';
import './CardBook.css';
import CommentArea from '../CommentArea/CommentArea';

export default function CardBook({book}) {
    let {title,img,price,asin}=book;
    const[selected,setSelected]=useState(false);
    const [showReview,setShowReview]=useState(false);

    function selectBook(){
      setSelected(!selected);
    }
    function showComment(){
      setShowReview(true);


    }
    return (
    <Card className={selected?'m-2 col-3 focusCard cardsel':'m-2 col-3 focusCard'} 
          style={{ width: '16rem',minWidth:'150px'}}>
      <Card.Img onClick={selectBook} variant="top" style={{ height: '60%' }} src={img} />
      <Card.Body className='d-flex flex-column justify-content-between'>
        <Card.Title>{title}</Card.Title>
        {(selected)&& (
          <Button onClick={showComment} className='btn-warning'>View Review</Button>
          )}
        {(showReview) && (<CommentArea asin={asin} 
                                      title={title}
                                      showReview={showReview} 
                                      functionShow={setShowReview} />)}
        <Button variant="primary">Buy for $ {price}</Button>
      </Card.Body>
    </Card>
  )
}

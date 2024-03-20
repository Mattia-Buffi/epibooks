import React from 'react'
import { Card } from 'react-bootstrap'

export default function SingleComment({commento}) {
    const{comment,rate,author}=commento
    return (
    <Card>
      <Card.Header>{author}</Card.Header>
      <Card.Body>
        <Card.Title>{rate}</Card.Title>
        <Card.Text>
          {comment}
        </Card.Text>
      </Card.Body> 
    </Card>
  )
}

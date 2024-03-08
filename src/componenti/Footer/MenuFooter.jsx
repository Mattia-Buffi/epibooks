import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default function MenuFooter({menu}) {
    return (
    <ListGroup className='mx-1'>
      {menu.map(item=><ListGroupItem>{item}</ListGroupItem>)}
    </ListGroup>
  )
}

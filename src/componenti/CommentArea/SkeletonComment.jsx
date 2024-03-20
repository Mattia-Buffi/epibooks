import React from 'react'
import { Placeholder, Card } from 'react-bootstrap'

export default function SkeletonComment() {
    console.log('caricamento skeleton')
  return (
    <Card>
        <Placeholder as="Card.Hearder" animation='glow'>
            <Placeholder xs={6} />  
        </Placeholder>
        <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={3} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={10}/>
            <Placeholder xs={10}/>
        </Placeholder>
    </Card>
  )
}

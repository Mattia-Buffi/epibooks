import React from 'react'
import { Alert } from 'react-bootstrap'

export default function Welcome({username}) {
  return (
    <Alert variant="success" dismissible>
      <Alert.Heading>Hey {username}, nice to see you</Alert.Heading>
      <p>
        Benvenuto su EpiBooks
        Aww yeah, you successfully read this important alert message. Today shipping tax for free
      </p>
      <hr />
      <p className="mb-0">
        Ecco di seguito le top 5 dei tuoi generi preferiti
      </p>
    </Alert>
  )
}

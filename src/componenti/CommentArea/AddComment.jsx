import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'


export default function AddComment({newComment,saveComment,upLoad}) {
    const [comment,setComment]=useState("")
    const [rate,setRate]=useState("")

    async function postApi(){
        console.log(comment, 'datis', rate)
        let newObj={"comment":comment,"rate":rate}
        await saveComment({...newComment,...newObj});
        
    }
  return (
    <Form className='border-success border rounded p-2'>
        <Form.Group className="mb-3" controlId="commento">
            <Form.Label>Inserisci il tuo commento</Form.Label>
            <Form.Control as="textarea" rows={2} onChange={(e)=>setComment(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="reting" onChange={(e)=>setRate(e.target.value)}>
            <Form.Label>Inserisci rate da 1 a 5 </Form.Label>
            <Form.Control />
        </Form.Group>
        <Button variant="secondary" onClick={()=>postApi()}>Aggiungi Commento</Button>        
    </Form>
  )
}

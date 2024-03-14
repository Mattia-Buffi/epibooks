import React from 'react';
import fantasyBooks from '../books/fantasy.json';
import horrorBooks from '../books/horror.json';
import CardBook from '../CardBook/CardBook';
import { Form,Button } from 'react-bootstrap';
import { useState } from 'react';

export default function AllTheBooks() {
    let topHorror=horrorBooks.slice(0,5);
    let topFantasy=fantasyBooks.slice(0,10);

    const [inputName,setInputName]=useState('');
    const [listBook,setListBook]=useState([]);

    function filterBooks(e){
        e.preventDefault();
        setListBook(fantasyBooks.filter((book)=>book.title.toLocaleLowerCase().includes(inputName.toLocaleLowerCase())))
    }
    function deleteList(){
      setListBook([]);
    }
    return (
    <div className='container-fluid'>
        <div className='d-flex justify-content-center m-2'>
        <Form className="d-flex w-75 align-items-baseline">
            <Form.Label className='me-2'>Cerca</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              value={inputName}
              onChange={(e)=>setInputName(e.target.value)}
            />
            <Button variant="outline-success" onClick={(e)=>filterBooks(e)}>Search</Button>
            {(inputName!=0)&&<Button className='ms-2' variant="outline-danger" onClick={deleteList}>Reset</Button>}
        </Form>
        </div>
        <div>
        <h2>Ricerca</h2>
        <div className='row justify-content-center'>
        {listBook.map((book)=><CardBook key={book.asin} book={book}/>)}
        </div>
        </div>

        <div>
        <h2>Top 10: Fantasy</h2>
        <div className='row justify-content-center'>
        {topFantasy.map((book)=><CardBook key={book.asin} book={book}/>)}
        </div>
        </div>
    </div>
  )
}

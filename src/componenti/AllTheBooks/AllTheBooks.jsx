import React, { useEffect } from 'react';
import fantasyBooks from '../books/fantasy.json';
import CardBook from '../CardBook/CardBook';
import { useState } from 'react';

export default function AllTheBooks({keySearch}) {
    let topFantasy=fantasyBooks.slice(0,8);
    const [listBook,setListBook]=useState([])
  
  useEffect(()=>{
      setListBook(fantasyBooks.filter((book)=>book.title.toLocaleLowerCase().includes(keySearch.toLocaleLowerCase())))
      console.log(listBook);
    },[keySearch])
    
    return (
      <div className='container-fluid'> 
        {(listBook==0)&&(
          <>
          <h3 className='my-4'>Nessun libro trovato con la query <strong>{keySearch}</strong></h3>
          <h2>Top 8: Fantasy</h2>
          <div className='row justify-content-center'>
             {topFantasy.map((book)=><CardBook key={book.asin} book={book}/>)}
          </div>
          </>
        )}
        {(listBook!=0) && (
        <div>
        <h2>{(keySearch=="")?"Fantasy All":"Ricerca"}</h2>
        <div className='row justify-content-center'>
        {listBook.map((book)=><CardBook key={book.asin} book={book}/>)}
        </div>
        </div>
        )}
        niente
      </div>
  )
}

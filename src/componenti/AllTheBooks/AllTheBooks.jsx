import React from 'react';
import fantasyBooks from '../books/fantasy.json';
import horrorBooks from '../books/horror.json';
import CardBook from '../CardBook/CardBook';

export default function AllTheBooks() {
    let topHorror=horrorBooks.slice(0,5);
    let topFantasy=fantasyBooks.slice(0,5);
    return (
    <div>
        <div>
        <h2>Top 5: Horror</h2>
        <div className='d-flex justify-content-between'>
        {topHorror.map((book)=><CardBook key={book.asin} book={book}/>)}
        </div>
        </div>
        <div>
        <h2>Top 5: Fantasy</h2>
        <div className='d-flex justify-content-between'>
        {topFantasy.map((book)=><CardBook key={book.asin} book={book}/>)}
        </div>
        </div>
    </div>
  )
}

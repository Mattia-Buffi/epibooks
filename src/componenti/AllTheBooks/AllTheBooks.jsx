import React from 'react';
import fantasyBooks from '../books/fantasy.json';
import horrorBooks from '../books/horror.json';
import CardBook from '../CardBook/CardBook';

export default function AllTheBooks() {
    let topHorror=horrorBooks.slice(0,5);
    let topFantasy=fantasyBooks.slice(0,5);
    return (
    <div className='container-fluid'>
        <div>
        <h2>Top 5: Horror</h2>
        <div className='row g-2'>
        {topHorror.map((book)=><CardBook key={book.asin} book={book}/>)}
        </div>
        </div>
        <div>
        <h2>Top 5: Fantasy</h2>
        <div className='row g-2'>
        {topFantasy.map((book)=><CardBook key={book.asin} book={book}/>)}
        </div>
        </div>
    </div>
  )
}

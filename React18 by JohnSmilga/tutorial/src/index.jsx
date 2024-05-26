import { realpathSync } from 'fs';
import React from 'react';
import ReactDOM from 'react-dom/client';

const BookList = () => {
  return(
  <section>

    <Book />
    <Book />
    <Book />
    <Book />
    
  </section>

  )
}





const Book = () => {
  return(
    <article>

      <Image/>
      <Title />
      <Author />
      <hr />

    </article>
  )
}



const Image = () =>{
  return(
  <img src="https://m.media-amazon.com/images/I/51-78lFnmbL._SY445_SX342_.jpg" alt="Image on Atomic Habits" />
  )
} 

const Title = () => {
  return(
  <h2>Atomic Habits</h2>
  )
}

const Author = () => {
  return(
  <h4>James Clear</h4>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>)


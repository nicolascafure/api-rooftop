 import { useState } from "react"

 const Books=()=>{
    const [books, setBooks]=useState([])
    const consultarApiLibros=()=>{
        const data = fetch("https://fakerapi.it/api/v1/books?_quantity=10")
        .then(data=>data.json())
        .then(resultado=>setBooks(resultado.data))
        
        }
    return(
    <>
       <div className= "contenedor-component">
            <button onClick={consultarApiLibros}>Consultar api libros</button>
            <div className="contenedor-books">
            {books.map(book=><div key={book.title} className="book">
<p><span className="subtitle">Title:</span> {book.title}</p>
<p><span className="subtitle">Autor:</span>  {book.author}</p>
<p><span className="subtitle">Description:</span>  {book.description}</p>
<p><span className="subtitle">Genre:</span>  {book.genre}</p>

            </div>)}


        </div>
        </div>
</>
   
    )
    
     }
    
    
     export default Books
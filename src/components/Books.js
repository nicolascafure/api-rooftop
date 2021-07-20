 import { useState } from "react"

 const Books=()=>{
    const [books, setBooks]=useState([])
    const consultarApiLibros=()=>{
        const data = fetch("https://fakerapi.it/api/v1/books?_quantity=10")
        .then(data=>data.json())
        .then(resultado=>setBooks(resultado.data))
        
        }
    return(
    
        <div className="contenedor-books">
            <button onClick={consultarApiLibros}>Consultar api libros</button>

            {books.map(book=><div key={book.title} className="book">
<p>{book.title}</p>
<p>{book.author}</p>
<p>{book.description}</p>
<p>{book.genre}</p>

            </div>)}


        </div>

   
    )
    
     }
    
    
     export default Books
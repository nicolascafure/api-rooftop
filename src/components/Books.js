 

 const Books=({books})=>{

    return(
    
        <div className="contenedor-books">
            {books.map(book=><div key={book.title} className="book">
<h3>{book.title}</h3>
<h3>{book.author}</h3>
<p>{book.description}</p>
<h3>{book.genre}</h3>

            </div>)}


        </div>

   
    )
    
     }
    
    
     export default Books
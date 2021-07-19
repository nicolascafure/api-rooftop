 

 const ImageForm=({image})=>{

return(

<div className="contenedor-imagen">
<h1>{image.title}</h1>
<img src={image.url}></img>
<p>{image.description}</p>


</div>
)

 }


 export default ImageForm
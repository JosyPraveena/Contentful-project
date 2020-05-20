import React from "react"
import "../App.css"

const Product = ({data}) =>{
    const{items} = data;
//console.log(data.items[0])
return(
    <>
    <div id="product">
<div id="product-top-left">
    <img src={items[0].fields.bookImage.fields.file.url} alt="productimage"/>

</div>
<div id="product-top-right"> 
<h1>{items[0].fields.bookTitle}</h1>
<h1>${items[0].fields.bookPrice}</h1>
<h2>Rating: {items[0].fields.bookRating}/5</h2>
<p>{items[0].fields.bookSubtext}</p>
<button>BUY NOW</button>
</div >

</div>

<div id="product-details">
<hr></hr>
<h2>Description</h2>
<p>{items[0].fields.bookDescription}</p>

</div>
</>
)
}

export default Product
import React from "react"
import "../App.css"

const Product = ({bookdetails}) =>{
//console.log(bookdetails.bookImage.fields)
return(
    <>
    <div id="product">
<div id="product-top-left">
    <img src="http://images.ctfassets.net/judmcnqfm2ry/1mIy0SOHPAAdYvsPWBoHdk/fc308f7653132b404daf660d5b0956f6/A18Cko6gRPL.jpg" alt="productimage"/>

</div>
<div id="product-top-right"> 
<h1>{bookdetails.bookTitle}</h1>
<h1>${bookdetails.bookPrice}</h1>
<h2>Rating: {bookdetails.bookRating}/5</h2>
<p>{bookdetails.bookSubtext}</p>
<button>BUY NOW</button>
</div >

</div>

<div id="product-details">
<hr></hr>
<h2>Description</h2>
<p>{bookdetails.bookDescription}</p>

</div>
</>
)
}

export default Product
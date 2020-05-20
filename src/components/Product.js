import React from "react"
import "../App.css"
import { useParams } from "react-router-dom";

const Product = ({data,mugData,shirtData}) =>{
    const comic = data;
	const mug = mugData;
	const tshirt = shirtData;
    const  {id} = useParams();
    console.los(tshirt.items.fields.shirtTitle)
    let product = []
    if(id === tshirt.items.fields.shirtTitle){
        product = tshirt.items.map(item => {
            return(
                <>
                <div id="product">
            <div id="product-top-left">
            <img src={item.fields.shirtImage[0].fields.file.url} alt="productimage"/>
            
            </div>
            <div id="product-top-right"> 
            <h1>{item.fields.shirtTitle}</h1>
            <h1>${item.fields.shirtPrice}</h1>
            <h2>Rating: {item.fields.shirtRating}/5</h2>
            <p>{item.fields.shirtSubtext}</p>
            <button>BUY NOW</button>
            </div >
            
            </div>
            
            <div id="product-details">
            <hr></hr>
            <h2>Description</h2>
            <p>{item.fields.shirtDescription}</p>
            
            </div>
            </>
            )
        } )
        
    }

return(
<div>{product}</div>
)
}

export default Product
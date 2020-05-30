import React,{useState} from "react";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const Shoppingcart =(props)=>{
 const {cartItems} = props
  const [qty,setQty] = useState(1)
 
  const addItems = (e,title) =>{
   
  cartItems.filter(each=>{
    if(title === each.title){
      setQty(qty+1)
    }
    return setQty(qty+1)
  })
  
}
const reduceItems = () =>{
  if (qty > 1)
  setQty(qty-1)
}

 console.log(cartItems)
  return(
  <>
        <h2>Shopping Cart</h2>
          <ul>
          {cartItems.map(each=> {
            return(
              <li key={each.title}>
                {each.title}
              <AddOutlinedIcon onClick={(e) => addItems(e,each.title)}/> {qty}
             <RemoveOutlinedIcon onClick={reduceItems}/>
             <DeleteForeverOutlinedIcon/>
             
             </li>
            )
          })}
          
         </ul>
         

     
 </>
)

}
export default Shoppingcart
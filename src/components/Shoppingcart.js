import React,{useState} from "react";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const Shoppingcart =(props)=>{
 let {cartItems} = props


  
  return(
  <>
        <h2>Shopping Cart</h2>
          <ul>
          {cartItems.map(each=> {
            return(
              <li key={each.description}>
                
               {each.title}  price:{Number.parseFloat(each.price*each.quantity).toFixed(2)} 
             <AddOutlinedIcon onClick={() => props.addItems(each.productid,each.title)}/> {each.quantity}
             <RemoveOutlinedIcon onClick={()=>props.reduceItems(each.productid,each.title)}/>
             <DeleteForeverOutlinedIcon onClick={()=>props.deleteItems(each.title,each.quantity)}/>
             
             </li>
            )
          })}
          
         </ul>
         

     
 </>
)

}
export default Shoppingcart
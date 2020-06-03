import React,{useState,useEffect} from "react";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import ErrorMessage from'./ErrorMessage'

const Shoppingcart =(props)=>{
 let {cartItems} = props
 const [totalCost,setTotalCost] = useState(0)
 
 useEffect(()=>{
  if(cartItems.length > 0){
    setTotalCost(cartItems.map(each => (each.price*each.quantity)).reduce((accumulator, currentValue) => accumulator + currentValue))

  }
  
 },[props.count,cartItems])
 

  return(
  <>
        <br/>
        <br/>
        <h2>Shopping Cart</h2>
         {props.isStateEmpty===false ? <ErrorMessage/> : null}
          <ul>
          {cartItems.map(each=> {
            return(
              <li key={each.description}>
                
            {each.title} PRICE:{Number.parseFloat(each.price*each.quantity).toFixed(2)} 
             <AddOutlinedIcon onClick={() => props.addItems(each.productid,each.title)}/> {each.quantity}
             <RemoveOutlinedIcon onClick={()=>props.reduceItems(each.productid,each.title)}/>
             <DeleteForeverOutlinedIcon onClick={()=>props.deleteItems(each.title,each.quantity)}/>
             
             </li>
            )
          })}
          
         </ul>
    
         {totalCost.toFixed(2)}

     
 </>
)


}
export default Shoppingcart
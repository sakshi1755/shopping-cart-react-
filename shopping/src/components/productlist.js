import React from 'react'
import Product from '././product'

export default function Productlist(props) {
  return (
  
  props.product.map((p,i) =>{
        return <Product key={i} individualproduct={p} index={i} iq={props.iq} dq={props.dq} />
})
 
   
  );


}

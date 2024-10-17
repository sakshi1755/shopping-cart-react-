import React from 'react'

export default function Product(props) {
  return (
    <div style={{margin: '10px 10px 10px 10px'  }}>
       {props.individualproduct.name}
    
    <button style={{margin: " 10px"}} type="button" className="btn btn-info">₹{props.individualproduct.price}</button>
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger"onClick={()=> props.dq(props.index)}>-</button>
  <button type="button" class="btn btn-warning">{props.individualproduct.quantity}</button>
  <button type="button" class="btn btn-success" onClick={()=> props.iq(props.index)}>+</button>
</div>
    </div>
    
  )
}

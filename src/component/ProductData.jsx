import React from 'react'
import { useSelector } from 'react-redux'

const ProductData = () => {
  const {cart}=useSelector(state=>state.product)
  return (
    <div>
      <p>ldfgsldf</p>
      {
        cart.map((item)=>(
          <>
          <p>{item.title}</p>
      
          </>
        ))
      }
    </div>
  )
}

export default ProductData
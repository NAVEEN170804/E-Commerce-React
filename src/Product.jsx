import React from 'react'
import './Product.css'
function Product({data}) {
  return (
    <div className='Product'>
        <h3> {data.name} </h3>
        <img src={data.src} alt="image" />
        <h3>Prize ${data.prize}</h3>
        <button>Add to Cart</button>
    </div>
  )
}

export default Product
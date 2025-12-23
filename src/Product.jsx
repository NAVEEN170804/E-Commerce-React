import React, { useState } from 'react'
import './Product.css'
function Product({data}) {
  const[value,setValue]=useState("Add to cart");
  const[classs,setclasss]=useState("addButton");
  const[classs1,setclasss1]=useState("Product");
  return (
    <div className={classs1}>
        <h3> {data.name} </h3>
        <img src={data.src} alt="image" />
        <h3>
  Price ₹{data.prize.toLocaleString("en-IN")}
</h3>

        <button className={classs} onClick={()=>{setValue("Booked");
           setclasss("addButton1");
           setclasss1("Product1");}}>
            {value}
            </button>
    </div>
  )
}

export default Product
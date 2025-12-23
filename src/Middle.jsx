import React from 'react'
import './Middle.css'
import Product from './Product'
function Middle() {
  let pname1={name:"Laptop", src:"https://tse4.mm.bing.net/th/id/OIP.XdfInyhyD0s7SZ_SmDiN8AHaEp?pid=Api&P=0&h=180", prize:50}
  let pname2={name:"Mobile", src:"https://tse2.mm.bing.net/th/id/OIP.V8NVXODUkODhicTKe7MblAHaIL?pid=Api&P=0&h=180", prize:20}
  let pname3={name:"Umbrella", src:"https://tse4.mm.bing.net/th/id/OIP.NKVeeLwAxZu7ZStSmvYk0AHaHa?pid=Api&P=0&h=180", prize:5}
  let pname4={name:"Iron Box", src:"https://tse4.mm.bing.net/th/id/OIP.nvUsnkGOIsqWAJ0MBRxgygHaGI?pid=Api&P=0&h=180", prize:10}
  return (
    <div className='Middle'>
      <br /><br />
      <div className="main">
      <Product data={pname1}></Product>
      <Product data={pname2}></Product>
      <Product data={pname3}></Product>
      <Product data={pname4}></Product>
    </div>
    <br /><br />
    <div className="main">
      <Product data={pname3}></Product>
      <Product data={pname4}></Product>
      <Product data={pname1}></Product>
      <Product data={pname2}></Product>
      
    </div>
    <br /><br />
    <div className="main">
       <Product data={pname2}></Product>
      <Product data={pname3}></Product>
      <Product data={pname1}></Product>
      <Product data={pname4}></Product>
    </div><br /><br />
    </div>
  )
}

export default Middle
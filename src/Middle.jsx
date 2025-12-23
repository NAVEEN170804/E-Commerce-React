import React from 'react'
import './Middle.css'
import Product from './Product'
function Middle() {
  let pname1={name:"Laptop", src:"https://tse4.mm.bing.net/th/id/OIP.XdfInyhyD0s7SZ_SmDiN8AHaEp?pid=Api&P=0&h=180", prize:40000}
  let pname2={name:"Mobile", src:"https://tse2.mm.bing.net/th/id/OIP.V8NVXODUkODhicTKe7MblAHaIL?pid=Api&P=0&h=180", prize:20000}
  let pname3={name:"Umbrella", src:"https://tse4.mm.bing.net/th/id/OIP.NKVeeLwAxZu7ZStSmvYk0AHaHa?pid=Api&P=0&h=180", prize:50}
  let pname4={name:"Iron Box", src:"https://tse4.mm.bing.net/th/id/OIP.nvUsnkGOIsqWAJ0MBRxgygHaGI?pid=Api&P=0&h=180", prize:1000}
  let pname5={name:"Airpods", src:"https://tse3.mm.bing.net/th/id/OIP.ujSWOTH1syHWy71v4uSiCgHaHa?pid=Api&P=0&h=180", prize:999}
  let pname6={name:"Neckband", src:"https://tse2.mm.bing.net/th/id/OIP.tM_aJOqaXkewGiviVgb7hwHaHE?pid=Api&P=0&h=180", prize:749}
  let pname7={name:"I Phone 17", src:"https://tse2.mm.bing.net/th/id/OIP.pSUAP-K3fdnhr6Z0W27LFQHaHa?pid=Api&P=0&h=180", prize:79999}
  let pname8={name:"Samsung Galaxy S24 Ultra", src:"https://tse2.mm.bing.net/th/id/OIP.9pNwwwIVk4SpRE9_NWJN6wHaHl?pid=Api&P=0&h=180", prize:129999}
  
  return (
    <div className='Middle'>
      <br /><br />
      <div className="main">
      <Product data={pname7}></Product>
      <Product data={pname8}></Product>
      <Product data={pname2}></Product>
      <Product data={pname1}></Product>
    </div>
    <br /><br />
    <div className="main">
      <Product data={pname5}></Product>
      <Product data={pname6}></Product>
      <Product data={pname3}></Product>
      <Product data={pname4}></Product>
      
    </div>
    <br /><br />
    <div className="main">
      <Product data={pname7}></Product>
      <Product data={pname8}></Product>
      <Product data={pname2}></Product>
      <Product data={pname1}></Product>
    </div>
    <br /><br />
    <div className="main">
      <Product data={pname5}></Product>
      <Product data={pname6}></Product>
      <Product data={pname3}></Product>
      <Product data={pname4}></Product>
      
    </div>
    </div>
  )
}

export default Middle
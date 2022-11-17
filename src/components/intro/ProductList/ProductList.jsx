import React from 'react'
import './ProductList.css'
import Product from '../Product/Product'
import {products} from '../../../data'

function ProductList() {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">My Recent Projects</h1>
            
        <p className="pl-desc">
            These are my most recent projects, which consists of a Fullstack food ordering app, a logistics
            and product shipping website, and my web development agency website.
        </p>
        </div>
        <div className="pl-list">
            {products.map(p=>(
              <Product key={p.id} img ={p.img} link ={p.link}/>
            ))}
            
        </div>
    </div>
  )
}

export default ProductList
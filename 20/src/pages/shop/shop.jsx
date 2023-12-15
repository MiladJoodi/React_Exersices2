import React from 'react'
import { PRODUCTS } from '../cart/data/products'
import Product from './Product'

export function Shop() {
  return (
    <>
    <h1>Shop</h1>
    <div className='row'>
        {PRODUCTS.map((productData)=> <Product data={productData} />
        )}
    </div>
    </>
  )
}


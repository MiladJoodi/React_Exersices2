import React from 'react'

export default function Product(props) {
  console.log(props);

  return (
    <div className='col-3'>
      {props.data.productName}
    </div>
  )
}
import React from 'react'

function DetailPage({selectedProduct}) {
  return (
    <>
      <h1>Selected Product Details</h1>
      <p>ID: {selectedProduct._id}</p>
      <p>Name: {selectedProduct.name}</p>
      <p>Brand: {selectedProduct.brand}</p>
      <p>SKU: {selectedProduct.SKU}</p>
      <p>Base Price: {selectedProduct.base_price}</p>
      <p>Description: {selectedProduct.description}</p>
      <p>Category: {selectedProduct.category}</p>
    </>
  )
}

export default DetailPage

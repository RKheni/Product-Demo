import React from 'react'
import Commonstyles from "./productCSS/CommonStyles.module.css"

function DetailPage({selectedProduct}) {
  return (
    <form className={Commonstyles.form} >
      <h3 className={Commonstyles.title}>Selected Product Details</h3>

      <table className="table table-bordered">
                <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Brand</th>
                      <th scope="col">SKU</th>
                      <th scope="col">Base Price</th>
                      <th scope="col">Description</th>
                      <th scope="col">Category</th>
                    </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>{selectedProduct._id}</td>
                    <td>{selectedProduct.name}</td>
                    <td>{selectedProduct.brand}</td>
                    <td>{selectedProduct.SKU}</td>
                    <td>{selectedProduct.base_price}</td>
                    <td>{selectedProduct.description}</td>
                    <td>{selectedProduct.category}</td>
                  </tr>
                </tbody>
        </table>
    </form>
  )
}

export default DetailPage

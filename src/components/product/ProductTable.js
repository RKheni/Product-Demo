import React from 'react'
import Commonstyles from "./productCSS/CommonStyles.module.css"
import styles from "./productCSS/ProductPage.module.css"
import { useNavigate } from 'react-router-dom'

function ProductTable({products, handleClick}) {

    const navigate = useNavigate();

  return (
      <form className={Commonstyles.form} >
            <h3 className={Commonstyles.title}>Product Page</h3>

            {/* Add Product Button */}
            <button className={styles.buttonPlus} 
                onClick={() => {navigate('/addProduct')}}>
                    <img className={styles.imgPlus} src="plus_icon.png" height="35" alt='plus icon' /> 
                    <b>Add Product</b>
            </button>

            {/* Display Product data in Tabular formate */}
            <table className="table table-bordered">
                <thead>
                    <tr>
                      <th scope="col">No</th>                        
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
                    {products.map((val, index) => {
                        return (
                        <tr key={index} onClick={handleClick}>
                          <td>{index + 1}</td>
                          <td>{val._id}</td>
                          <td>{val.name}</td>
                          <td>{val.brand}</td>
                          <td>{val.SKU}</td>
                          <td>{val.base_price}</td>
                          <td>{val.description}</td>
                          <td>{val.category}</td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </form>
  )
}

export default ProductTable

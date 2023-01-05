import React, { useState, useEffect } from 'react'
import styles from "./productCSS/ProductPage.module.css"
import Commonstyles from "./productCSS/CommonStyles.module.css"
import { useNavigate } from 'react-router-dom'

function ProductPage() {

  const navigate = useNavigate();
  
  const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = "https://cricketecommerce.onrender.com/Products";

        // API Implement using GET Method
          fetch(url).then(response => response.json()).then(json => {
            console.log("json", json);
            setProducts(json?.data);
          }).catch(e => {
             console.log("e", e)
          })
    }, []);

  return (
    <div className={Commonstyles.container}>
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
                      <th scope="col">Price</th>
                      <th scope="col">Description</th>
                      <th scope="col">Category</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((val, id) => {
                        return (
                        <tr key={id}>
                          <td>{id+1}</td>
                          <td>{val._id}</td>
                          <td>{val.name}</td>
                          <td>{val.brand}</td>
                          <td>{val.price}</td>
                          <td>{val.description}</td>
                          <td>{val.category}</td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </form>
    </div>
  )
}

export default ProductPage

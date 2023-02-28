import React, { useState } from 'react'
import Commonstyles from "./productCSS/CommonStyles.module.css"
import Table from "react-bootstrap/Table"
import styles from "./productCSS/ProductTable.module.css"
import { useNavigate } from 'react-router-dom'
import categoryArray from './CategoryArray.json'

function ProductTable({products, handleClick}) {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");

  return (
      <form className={Commonstyles.form} >
            <h3 className={Commonstyles.title}>Product Page</h3>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            {/* Search Bar By Product Name */}
                            <input className={styles.search_bar} type="text" placeholder="Search here" 
                                onChange={(e) => setSearch(e.target.value)} />
                            
                            {/* Search Dropdown By Product Category */}
                            <select className={styles.search_bar}>
                                {categoryArray.data.map((val, key) => (
                                    <option key={key} value={val._id}>{val.categoryName}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-sm-6">
                            {/* Add Product Button */}
                            <button className={styles.buttonPlus} 
                                onClick={() => {navigate('/addProduct')}}>
                                    <img className={styles.imgPlus} src="plus_icon.png" height="35" alt='plus icon' /> 
                                    <b>Add Product</b>
                            </button>
                        </div>
                    </div>
                </div>

            {/* Display Product data in Tabular formate */}
            <Table responsive hover bordered size='sm'>
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
                 {/* eslint-disable-next-line */}
                    {products.filter(product => {
                                    if (search === '') {
                                    return product;
                                    } else if (product.name.toLowerCase().includes(search.toLowerCase())) {
                                    return product;
                                    }
                                }).map((val, index) => {
                                    return (
                                    <tr key={index} onClick={(e) => {handleClick(val)}}>
                                    <td>{index + 1}</td>
                                    <td>{val._id}</td>
                                    <td>{val.name}</td>
                                    <td>{val.brand}</td>
                                    <td>{val.SKU}</td>
                                    <td>{val.base_price}</td>
                                    <td>{val.description}</td>
                                    <td>{val.category}</td>
                                    </tr>
                                )})
                    }
                </tbody>
            </Table>
        </form>
  )
}

export default ProductTable

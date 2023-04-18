import React, { useState } from 'react'
import Commonstyles from "./productCSS/CommonStyles.module.css"
import Table from "react-bootstrap/Table"
import styles from "./productCSS/ProductTable.module.css"
import { useNavigate } from 'react-router-dom'
import categoryArray from './CategoryArray.json'

function ProductTable({products, handleClick}) {

    const navigate = useNavigate();

    const [search, setSearch] = useState('');
    const [searchCategory, setSearchCategory] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
      };

    const filteredData = products.filter((item) => item.name === search);

  return (
      <form className={Commonstyles.form} >
            <h3 className={Commonstyles.title}>Product Page</h3>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            {/* Search Bar By Product Name with Suggestions */}
                            <input className={styles.search_bar} type="text" placeholder="Search here" 
                                value={search} onChange={handleSearch} />

                            <ul>
                                {filteredData.map((item) => (
                                    <li key={item.id}>{item.name}</li>
                                ))}
                            </ul>
                            
                            {/* Search Dropdown By Product Category */}
                            {/* <select className={styles.search_bar} placeholder="Select category"
                                value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)}>
                                    {categoryArray.data.map((val, key) => (
                                        <option key={key} value={val._id}>{val.categoryName}</option>
                                    ))}
                            </select> */}
                            <input className={styles.search_bar} list='searchCate' placeholder="Select category" 
                                onChange={(e) => setSearchCategory(e.target.value)} />
                                    <datalist id='searchCate'>
                                        {categoryArray.data.map((val, i)=> <option key={i}>{val.categoryName}</option>)}
                                    </datalist>
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
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Images</th>
                      <th scope="col">Brand</th>
                      <th scope="col">SKU</th>
                      <th scope="col">Base Price</th>
                      <th scope="col">Description</th>
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
                                    <td>{val._id}</td>
                                    <td>{val.name}</td>
                                    <td><img className={styles.img_size} src={val.images} alt='product_image not given' /></td>
                                    <td>{val.brand}</td>
                                    <td>{val.SKU}</td>
                                    <td>{val.base_price}</td>
                                    <td>{val.description}</td>
                                    </tr>
                                )})
                    }
                </tbody>
            </Table>
        </form>
  )
}

export default ProductTable

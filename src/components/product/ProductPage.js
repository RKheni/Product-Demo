import React, { useState, useEffect } from 'react'
import styles from "./productCSS/ProductPage.module.css"
import Commonstyles from "./productCSS/CommonStyles.module.css"
import { useNavigate } from 'react-router-dom'
// import { Modal, Button } from 'react-bootstrap'

function ProductPage() {

  const navigate = useNavigate();
  
  const [products, setProducts] = useState([]);

    const getData = () => {
      const url = "https://cricketecommerce.onrender.com/Products/all";

        // API Call -  GET Method
          fetch(url)
          .then(response => response.json())
          .then(res => { 
            console.log("Product Page res---", res);
            setProducts(res?.data);
          }).catch(e => {
             console.log("e", e)
          })
    }

    useEffect(() => {
        getData();
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
                      <th scope="col">SKU</th>
                      <th scope="col">Base Price</th>
                      <th scope="col">Description</th>
                      <th scope="col">Category</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((val, index) => {
                        return (
                        <tr key={index}>
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

        {/* Modal Box 
 
      <Modal show={modalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-striped table-sm">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Description</th>
                <th>Category</th>
                <th>isActive</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{modalData.name}</td>
                <td>{modalData.brand}</td>
                <td>{modalData.price}</td>
                <td>{modalData.description}</td>
                <td>{modalData.category}</td>
                <td>{modalData.isActive}</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}> Close </Button>
        </Modal.Footer>
      </Modal> */}

    </div>
  )
}

export default ProductPage

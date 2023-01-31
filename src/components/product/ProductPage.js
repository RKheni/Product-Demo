import React, { useState, useEffect } from 'react'
import styles from "./productCSS/ProductPage.module.css"
import Commonstyles from "./productCSS/CommonStyles.module.css"
import { useNavigate } from 'react-router-dom'

function ProductPage() {

  const navigate = useNavigate();
  
  const [products, setProducts] = useState([]);
  // const [modalData, setModalData] = useState({});

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

    // const showDetail = (id) =>
    // {
      
    //   fetch(`https://cricketecommerce.onrender.com/Products/all/${id}`)
    //   .then(resposne=> resposne.json())
    //   .then(res=>setModalData(res?.data))
    // }

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
 
        <div className="modal" id="myModal">
        <div className="modal-dialog" style={{width:"700px"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Row No : {modalData._id}</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
             
            <div className="modal-body">
            <table className="table table-striped table-sm">
                        <thead className="thead-light">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>SKU</th>
                                <th>Base Price</th>
                                <th>Description</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                           <tr >
                              <td>{modalData._id}</td>
                              <td>{modalData.name}</td>
                              <td>{modalData.brand}</td>
                              <td>{modalData.sku}</td>
                              <td>{modalData.base_price}</td>
                              <td>{modalData.description}</td>
                              <td>{modalData.category}</td>
                           </tr>
                          
                        </tbody>
                    </table>
            </div>
             
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
             
          </div>
        </div>
      </div> */}

    </div>
  )
}

export default ProductPage

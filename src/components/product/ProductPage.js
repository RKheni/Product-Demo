import React, { useState, useEffect } from 'react'
import styles from "./productCSS/ProductPage.module.css"
import Commonstyles from "./productCSS/CommonStyles.module.css"
import { useNavigate } from 'react-router-dom'

function ProductPage() {

  const navigate = useNavigate();
  
  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState({
    _id: '',
    name: '',
    brand: '',
    price: 0,
    description: '',
    category: '',
    isActive: ''
  });

    useEffect(() => {
        const url = "https://cricketecommerce.onrender.com/Products";

        // API Implement using GET Method
          fetch(url).then(response => response.json())
          .then(res => { 
            console.log("Product Page res---", res);
            setProducts(res?.data);
          }).catch(e => {
             console.log("e", e)
          })
    }, []);

    // Show Product Detail
    const showDetail = (id) => {
      fetch(`https://cricketecommerce.onrender.com/Products/${id}`)
        .then(response => response.json())
        .then(res => setDetail(res))
    }

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
                      <th scope="col">Show Details</th>
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
                          <td>{val.price}</td>
                          <td>{val.description}</td>
                          <td>{val.category}</td>
                          <td><button className="btn btn-primary" onClick={(e)=>showDetail(val._id)} data-toggle="modal" data-target="#myModal">Get Details</button></td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </form>

      {/* Modal Box  */}
      <div className="modal" id="myModal">
        <div className="modal-dialog" style={{width:"700px"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">No : {detail._id}</h4>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
             
            <div className="modal-body">
            <table className="table table-striped table-sm">
                        <thead className="thead-light">
                            <tr>
                              <th>ID</th>
                              <th>Name</th>
                              <th>Brand</th>
                              <th>Price</th>
                              <th>Description</th>  
                              <th>Category</th>
                              <th>isActive</th>
                            </tr>
                        </thead>

                        <tbody>
                           <tr >
                            <td>{detail._id}</td>
                            <td>{detail.name}</td>
                            <td>{detail.brand}</td>
                            <td>{detail.price}</td>
                            <td>{detail.description}</td>     
                            <td>{detail.category}</td>  
                            <td>{detail.isActive}</td>        
                           </tr>
                        </tbody>
                    </table>
            </div>
             
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
             
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductPage

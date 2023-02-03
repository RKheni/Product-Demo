import React, { useState, useEffect } from 'react'
import DetailPage from './DetailPage';
import Commonstyles from "./productCSS/CommonStyles.module.css"
import ProductTable from './ProductTable';

function ProductPage() {
  
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

    const getData = () => {
      const url = "https://cricketecommerce.onrender.com/Products/all";

        // API Call -  GET Method
          fetch(url)
          .then(response => response.json())
          .then(res => { 
            // console.log("Product Page res---", res);
            setProducts(res?.data);
          }).catch(e => {
             console.log("e", e)
          })
    }

    useEffect(() => {
        getData();
    }, []);

    // selected product handle click 
    const handleClick = (product) => {
      setSelectedProduct(product);
    };

  return (
    <div className={Commonstyles.container}>
        {selectedProduct._id ? (
        <DetailPage selectedProduct={selectedProduct} />
      ) : (
        <ProductTable products={products} handleClick={handleClick} />
      )}

    </div>
  )
}

export default ProductPage
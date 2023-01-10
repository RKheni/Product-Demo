import React, { useState } from 'react'
import commonStyles from "./productCSS/CommonStyles.module.css"
import { useNavigate } from 'react-router-dom'


function AddProduct() {

  const navigate = useNavigate();

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [isActive, setIsActive] = useState(true);

    const handleInputChange = e => {
        const {id , value} = e.target;
        if(id === "name"){
          setName(value);
        }
        if(id === "brand"){
          setBrand(value);
        }
        if(id === "price"){
          setPrice(value);
        }
        if(id === "description"){
          setDescription(value);
        }
        if(id === "category"){
          setCategory(value);
        }
        if(id === "isActive"){
          setIsActive(value);
        }
      }

      const submitHandler = (e) => {
        e.preventDefault();
        
        const data = {
          name: name,
          brand: brand,
          price: price,
          description: description,
          category: category,
          isActive: isActive,
        };

        const url = "https://cricketecommerce.onrender.com/Products";
        const token = "Berear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDNlMjQ0ZmMzOWNhYTk2MjNiZDAwNCIsImlhdCI6MTY3MzMzNDc5NiwiZXhwIjoxNjczMzU2Mzk2fQ.C-v7nP1-nTPBoOILRZDCbjYXN69vMS1R193l3QQ04dA"

        // API Implement using POST Method
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json',
            'Authorization': token
          },
        })
        .then((response) => {
          console.log("Add response----", response);
          if(response.state === 200) {
            alert("Success");
          }
          // Navigate to Home page
          navigate('/productPage');
        }).catch(e => {
          console.log("Product Failed to Add due to: ", e.message)
        }) 
      }

  return (
    <>
     {/* Add Product Form */}
     <div className={commonStyles.container}>
     <form className={commonStyles.form} onSubmit={submitHandler}>
       <h3 className={commonStyles.title}>Add Product</h3>
         <div className="form-group row my-2">
             <label className="col-sm-5 col-form-label">Name</label>
             <div className="col-sm-7">
                 <input type="text" className="form-control" 
                   id='name' 
                   value={name}
                   onChange = {handleInputChange} 
                 />
             </div>
         </div>
         <div className="form-group row my-2">
             <label className="col-sm-5 col-form-label">Brand</label>
             <div className="col-sm-7">
                 <input type="text" className="form-control" 
                   id='brand'
                   value={brand}
                   onChange = {handleInputChange}
                 />
             </div>
         </div>
         <div className="form-group row my-2">
             <label className="col-sm-5 col-form-label">Price</label>
             <div className="col-sm-7">
                 <input type="number" className="form-control" 
                   id='price'
                   value={price}
                   onChange = {handleInputChange}
                 />
             </div>
         </div>
         <div className="form-group row my-2">
             <label className="col-sm-5 col-form-label">Description</label>
             <div className="col-sm-7">
                 <textarea className="form-control" 
                   id='description'
                   value={description}
                   onChange = {handleInputChange}
                 />
             </div>
         </div>
         <div className="form-group row my-2">
             <label className="col-sm-5 col-form-label">Category</label>
             <div className="col-sm-7">
                 <input type="text" className="form-control" 
                   id='category'
                   value={category}
                   onChange = {handleInputChange}
                 />
             </div>
         </div>
         <div className="form-group row my-2">
             <label className="col-sm-5 col-form-label">isActive</label>
             <div className="col-sm-7">
                 <input type="text" className="form-control" 
                    id='isActive'
                    value={isActive}
                    onChange = {handleInputChange}
                 />
             </div>
         </div>
         <br/>  
         {/* <b className={commonStyles.error}>{errorMsg}</b> */}
         
         <div className="form-group row">
             <button type="submit" className="col-12 btn btn-primary">
               Add Product
             </button>
         </div>
     </form>
   </div>
   </>
  )
}

export default AddProduct

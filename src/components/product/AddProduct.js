import React, { useState } from 'react'
import commonStyles from "./productCSS/CommonStyles.module.css"
import { useNavigate } from 'react-router-dom'
import categoryArray from './CategoryArray.json'
// import S3 from "aws-sdk/clients/s3";
// import { v4 as uuidv4 } from "uuid";

function AddProduct() {

  const navigate = useNavigate();

    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [SKU, setSKU] = useState('');
    const [base_price, setBase_price] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState([]);
    const [images, setImages] = useState([]);
    const [options, setOptions] = useState([]);
    const [variants, setVariants] = useState([]);
    const [isActive, setIsActive] = useState(true);

    const handleInputChange = e => {
        const {id , value} = e.target;
        if(id === "name"){ setName(value) }
        if(id === "brand"){ setBrand(value) }
        if(id === "SKU"){ setSKU(value) }
        if(id === "base_price"){ setBase_price(value) }
        if(id === "description"){ setDescription(value) }
        if(id === "category"){ setCategory(value) }
        if(id === "images"){ setImages(value) }
        if(id === "options"){ setOptions(value) }
        if(id === "variants"){ setVariants(value) }
        if(id === "isActive"){ setIsActive(value) }
      }

      // Submit Handler Function 
      const submitHandler = (e) => {
        e.preventDefault();
        
        const url = "https://api.fixmytrim.au/Products";

        const data = {
          name: name,
          brand: brand,
          SKU: SKU,
          base_price: base_price,
          description: description,
          category: [category],
          images: [images],
          options: [options],
          variants: [variants],
          isActive: isActive,
        };

        let headers = {}
        if (localStorage.token) {
          let saveToken = `Bearer ${localStorage.token}` 
          headers = { 'Content-type': 'application/json',
                      'Authorization': saveToken 
                    }
        }

        // API Call - POST Method
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: headers,
        })
        .then((response) => {
          console.log("Add response----", response);
          if(response.state === 200) {
            alert("Success");
          }
          // Navigate to Product Page
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
             <label className="col-sm-4 col-form-label">Name</label>
             <div className="col-sm-8">
                 <input type="text" className="form-control" 
                   id='name' 
                   value={name}
                   onChange = {handleInputChange} 
                 />
             </div>
         </div>
         <div className="form-group row my-2">
             <label className="col-sm-4 col-form-label">Brand</label>
             <div className="col-sm-8">
                 <input type="text" className="form-control" 
                   id='brand'
                   value={brand}
                   onChange = {handleInputChange}
                 />
             </div>
         </div>
         <div className="form-group row my-2">
             <label className="col-sm-4 col-form-label">SKU</label>
             <div className="col-sm-8">
                 <input type="text" className="form-control" 
                   id='SKU'
                   value={SKU}
                   onChange = {handleInputChange}
                 />
             </div>
         </div>
         <div className="form-group row my-2">
             <label className="col-sm-4 col-form-label">Base Price</label>
             <div className="col-sm-8">
                 <input type="number" className="form-control" 
                   id='base_price'
                   value={base_price}
                   onChange = {handleInputChange}
                 />
             </div>
         </div>
         <div className="form-group row my-2">
             <label className="col-sm-4 col-form-label">Description</label>
             <div className="col-sm-8">
                 <textarea className="form-control" 
                   id='description'
                   value={description}
                   onChange = {handleInputChange}
                 />
             </div>
         </div>
         <div className="form-group row my-2">
            <label className="col-sm-4 col-form-label">Category</label>
            <div className="col-sm-8">
                <select className="form-control" id='category' value={category} onChange={handleInputChange} >
                      {categoryArray.data.map((val, key) => (
                        <option key={key} value={val._id}>{val.categoryName}</option>
                      ))}
                </select>
            </div>
         </div>
         <div className="form-group row my-2">
             <label className="col-sm-4 col-form-label">Image</label>
             <div className="col-sm-8">
                 <input type="file" className="form-control" 
                   id='images'
                   value={images}
                   onChange = {handleInputChange}
                 />
             </div>
         </div>              
         <div className="form-group row my-2">
            <label className="col-sm-4 col-form-label">Options</label>  
            <label className="col-sm-1 col-form-label">Name</label>
             <div className="col-sm-3">
                 <input type="text" className="form-control" 
                   id='options'
                   value={options}
                   onChange = {handleInputChange}
                 />
             </div>
             <label className="col-sm-1 col-form-label">Value</label>
             <div className="col-sm-3">
                 <input type="textarea" className="form-control" 
                   id='options'
                   value={options}
                   onChange = {handleInputChange}
                 />
             </div>
         </div>
         <div className="form-group row my-2">
            <label className="col-sm-4 col-form-label">Variants</label>
            <div className="col-sm-8">
                <input type="text" className="form-control" 
                   id='variants'
                   value={variants}
                   onChange = {handleInputChange}
                />
            </div>
         </div>
         <div className="form-group row my-2">
             <label className="col-sm-4 col-form-label">isActive</label>
             <div className="col-sm-8">
                 <input type="text" className="form-control" 
                    id='isActive'
                    value={isActive}
                    onChange = {handleInputChange}
                 />
             </div>
         </div>
         <br/>  
         
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

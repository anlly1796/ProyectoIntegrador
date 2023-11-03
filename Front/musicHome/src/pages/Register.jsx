import React, { useRef, useState } from 'react'
import '../register.css'
export const Register = () => {
  const formRef = useRef();
  const [error, setError] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: null
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

  };

  const handleFileChange = (event) => {
    setFormData(prevState => ({
      ...prevState,
      image: event.target.files[0]
    }));

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const url = "http://localhost:8080/api/products"; 


    //+++++++++++++++++++++

    const dataToSend = new FormData();
    for( const key in formData){
      dataToSend.append(key,formData[key])
    }
  

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: dataToSend
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        // body: JSON.stringify(formData)
      });

      if (!response.ok) {

        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responsedata = await response.json();
     

    } catch (error) {
      setError(true);
    }
    formRef.current.reset();
  };




  return (
    <>
      <form  ref={formRef} lang="en" className="col-9 " onSubmit={handleSubmit} >

        <h1 className='text-center'>Register new product</h1>
        <div className=''>
          <label htmlFor="ProductName" className='form-label'>Product name</label>
          <input name="name" type="text" className="form-control " id="ProductName" aria-describedby="Name" onChange={handleInputChange} required />
        </div>
        <label htmlFor="Categories" className='form-label'>Category</label>
        <select name="category" className="form-select" aria-label="Default select example" id="Categories" onChange={handleInputChange} required>
          <option value="">Select a category</option>
          <option value="1">Rubbed Strings</option>
          <option value="2">Guitars</option>
          <option value="3">Wind</option>
          <option value="4">Keyboard</option>
          <option value="5">Percussion</option>
          <option value="6">Accessories</option>
          <option value="7">Others</option>
        </select>
        <div className=''>
          <label htmlFor="ProductPrice" className='form-label'>Price</label>
          <input name='price' type="text" className="form-control " id="ProductPrice" aria-describedby="Price" onChange={handleInputChange} required />
        </div>
        <div className="">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea name="description" className="form-control" id="description" rows="3" onChange={handleInputChange}></textarea>
        </div>

        <div className="mb-3" encType="multipart/form-data">
          <label htmlFor="formFileSm" className="form-label">Upload an image</label>
          <input name="image" className="form-control " id="formFileSm" type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit" className="btn">Save</button>
      </form>
      {error && <div className="alert alert-danger col-9 " role="alert">
        <h4 className="alert-heading">There was an issue trying to save the information.</h4>
        <p>Try again</p>
      </div>}
    </>
  )
}

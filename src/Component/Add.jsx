import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    let api_url='http://localhost:1000/product'
    let navigate=useNavigate()

    let[inputData,setData]=useState({
        prod_name:'',
        company:'',
        price:'',
        desc:''
    })
    let handleChange=(event)=>{
        event.persist();
        let{name,value}=event.target
        // console.log("name :",name,"value :",value);
        setData({...inputData,[name]:value})
    }
let submitChange=(event)=>{
    event.preventDefault();
    console.log("submiited value :",inputData);
    let data={
        prod_name:inputData.prod_name,
        company:inputData.company,
        price:inputData.price,
        desc:inputData.desc
    }
    
    axios.post(api_url,data).then(res=>{
        console.log("Axios res :",res);
        alert('Product added');
        navigate('/view')

    })
    .catch(err=>{
        console.log("Axios err :",err);
        alert(err.message);
    })    
}
  return (
    <div>
        <form onSubmit={submitChange}>
            <input type='text' name='prod_name' placeholder='Product' onChange={handleChange} /><br/>
            <input type='text' name='company' placeholder='Company' onChange={handleChange}/><br/>
            <input type='text' name='price' placeholder='Price' onChange={handleChange}/><br/>
            <input type='text' name='desc' placeholder='Description' onChange={handleChange}/><br/><br/>
            <input type='submit' name='' value='Add Product'/>
        </form>
    </div>
  )
}

export default Add
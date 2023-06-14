import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  let {pId}=useParams();
  let navigate=useNavigate()
  const[state,setState]=useState(
    {
      prod_name:'',
      company:'',
      price:'',
      desc:''
    }
  )
    useEffect(()=>{
      axios.get(`http://localhost:1000/product/${pId}`)
      .then(res=>{
        console.log("Data to be editted ",res);
        setState(res.data);
      })
      .catch(err=>{
        console.log("Data to be editted ",err);
      })
    },[setState])
const handleSubmit=(event)=>{
  event.preventDefault();
  console.log('Submitted values ',state);
  axios.put(`http://localhost:1000/product/${pId}`,state)
  .then(res=>{
    alert("Data updated sucessfully");
    console.log("Update response :",res.data);
    navigate('/view')
  })
  .catch(err=>{
    alert("Error to update");
    console.log("Update error ",err);
  })
}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='prod_name' value={state.prod_name} placeholder='Product' 
        onChange={(event)=>
        setState((prev)=>({...prev,prod_name:event.target.value}))
        }/><br />
        <input type='text' name='company' value={state.company} placeholder='Company' 
        onChange={(event)=>
        setState((prev)=>({...prev,company:event.target.value}))
        }/><br />
        <input type='text' name='price' value={state.price} placeholder='Price' 
        onChange={(event)=>
        setState((prev)=>({...prev,price:event.target.value}))
        }/><br />
        <input type='text' name='desc' value={state.desc} placeholder='Description' 
        onChange={(event)=>
        setState((prev)=>({...prev,desc:event.target.value}))
        }/><br /><br />
        <input type='submit' name='' value='Update data' />
      </form>
    </div>
  )
}

export default Edit
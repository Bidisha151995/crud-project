import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Details = () => {
  let {pId}=useParams()
  let[item,setItem]=useState([])
  let navigate=useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:1000/product/${pId}`)
    .then(res=>{
      console.log("Axios res :",res)
      setItem(res.data)
    })
    .catch(err=>{
      console.log("Axois error" ,err);
    })
  },[setItem])
  let deleteItem=(pId)=>{
      axios.delete(`http://localhost:1000/product/${pId}`)
      .then(res=>{
        console.log("Axios res ",res);
        alert("Data deleted sucessfully")
        navigate('/view')
      }).catch(err=>{
        console.log("Axios error ",err);
        alert("Error")
      })
  }
  return (
    <div>
      <h3>{item.prodname}</h3>
      <p>{item.company}</p>
      <p>{item.desc}</p>
      <Link>
        <Button onClick={()=>{deleteItem(item.id)}}>Delete</Button>
      </Link>
    </div>
  )
}

export default Details
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import{Container,Row,Col,Card,Button} from 'react-bootstrap'
import{Link} from 'react-router-dom'
const View = () => {
    let api_url='http://localhost:1000/product'
    let[data,setData]=useState([])
    useEffect(()=>{
        axios.get(api_url,data).then(res=>{
            console.log("Axios res",res);
            setData(res.data)
        })
        .catch(err=>{
            console.log("Axios err",err);
        })
    },[setData])
  return (
    <div>
      <h1 className='text-center'>Products</h1><br/><br/>
      <Container>
        <Row>
          {data.map(pro => (
            <Col key={pro.id}>
              <Card style={{ width: '18rem' }}><br/>
                <Card.Body>
                  <Card.Title>{pro.prod_name}</Card.Title>
                  <Card.Text>Details : {pro.company}</Card.Text>
                  <Card.Text>Price : {pro.price}</Card.Text>
                  <Card.Text>Price : {pro.desc}</Card.Text>

                </Card.Body>
                <Link to={`details/${pro.id}`}>
                    <Button>Details</Button>
                    </Link><br/>
                    <Link to={`edit/${pro.id}`}>
                    <Button>Edit</Button>
                    </Link><br/>
              </Card><br/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default View
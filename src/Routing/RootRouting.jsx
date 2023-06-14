import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Add from '../Component/Add'
import View from '../Component/View'
import Header from '../Component/Layout/Header/Header'
import Details from '../Component/Details'
import Edit from '../Component/Edit'
const RootRouting = () => {
  return (
    <div>
        <Router>
            <Header/>
            <Routes>
                <Route path='' element={<Add/>}/>
                <Route path='view' element={<View/>}/>
                <Route path='view/details/:pId' element={<Details/>}/>
                <Route path='view/edit/:pId' element={<Edit/>}/>

            </Routes>
        </Router>
    </div>
  )
}

export default RootRouting
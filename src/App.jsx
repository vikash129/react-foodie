//importin styling
import logo from './logo.svg';
import './App.css';

//componnet
import Header from './MyComp/Header' 
import { Footer } from './MyComp/Footer'
import { About } from './MyComp/About'

//Rest comp.
import RestList from './MyComp/RestList' 
import RestDetails from './MyComp/RestDetails' 
import RestHome from './MyComp/RestHome' 
import Login from './MyComp/Login' 
import RestUpdate from './MyComp/RestUpdate' 
import RestCreate from './MyComp/RestCreate' 
import Protected from './MyComp/Protected'


import React, { Component } from 'react'
import { BrowserRouter as Router , Route } from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div className = 'my-component'>

      <Router>

        <Header logo = {logo}/>


          <Route path = '/list'>
            <RestList/>
          </Route>

          <Route path = '/create'>
            <RestCreate/>
          </Route>

          <Route path = '/update/:id' render = {props => ( <RestUpdate {...props}/>)}>
          </Route>

          <Route path = '/login' render = {props  =>  <Login {...props} />}>
          </Route>

        
          <Route path = '/details' >
            <RestDetails/>
          </Route>

          <Route path = '/about'>
            <About/>
          </Route>

      <Protected exact path = '/' component = {RestHome}/>

      </Router>


      <Footer/>

      </div>
    )
  }
}

export default App

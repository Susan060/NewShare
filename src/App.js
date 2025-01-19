import './App.css'
import React, { Component } from 'react'
import Navbar from './Navbar'
import News from './News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export class App extends Component {
  pageSize=10;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
          <Routes>
          <Route exact path='/' element={ <News key="general" pageSize={this.pageSize} country={"us"} category={'general'}/>}/>
          <Route exact path='/science' element={ <News key="science" pageSize={this.pageSize} country={"us"} category={'science'}/>}/>
        <Route exact path='/science' element={ <News key="science" pageSize={this.pageSize} country={"us"} category={'science'}/>}/>
        <Route exact path='/business' element={ <News key="Business" pageSize={this.pageSize} country={"us"} category={'Business'}/>}/>
       <Route exact path='/sports' element={ <News key="Sports" pageSize={this.pageSize} country={"us"} category={'Sports'}/>}/>
       <Route exact path='/health' element={ <News key="Health" pageSize={this.pageSize} country={"us"} category={'Health'}/>}/>
       <Route exact path='/general' element={ <News key="General" pageSize={this.pageSize} country={"us"} category={'General'}/>}/>
       <Route exact path='/entertainment' element={ <News key="Entertainment" pageSize={this.pageSize} country={"us"} category={'Entertainment'}/>}/>
       <Route exact path='/technology' element={ <News key="Technology" pageSize={this.pageSize} country={"us"} category={'Technology'}/>}/>
        </Routes>
        </Router>
      </div>
      
    )
  }
}

export default App

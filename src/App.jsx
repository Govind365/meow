import { Component } from "react";
import { Fragment } from "react";
import { Navbar } from "./Navbar";
import MainContent from "./MainContent";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"


export default class App extends Component {
    render(){
      return (<Fragment>
       <Navbar></Navbar>
       <MainContent></MainContent>
      </Fragment>)
      ;
    }
}
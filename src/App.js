import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// import Bengaluru from "./Pages/Bengaluru";
import React,{Component} from "react"
import './App.css';
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import Search from './Component/Search'
import Navbar from './Component/Nav'
import Cards from "./Component/Cards"
import imgdata from "./Images";

export default class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <>
      <Navbar/>
      <Search/>
     <Link to="/bengaluru">
     <div style={{display:"flex", flexWrap:"wrap", gap:"20px",marginLeft:"120px"}}>
     {imgdata.map(x=>{
        return(
          <>
          <Cards imgSrc={x.imgSrc} place={x.place} placevisits={x.placevisits}/>
          </>
        )
      })}
     </div>
     </Link> 
    </>
    )
  }
} 

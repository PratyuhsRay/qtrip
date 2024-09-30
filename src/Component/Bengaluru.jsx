import bangData from "./bangalore"
import React,{Component} from "react"
import Bang from "./Bang"
import Navbar from "./Nav"
// import { Link } from "react-router-dom"
export default class Bengaluru extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <Navbar/>
            <h2 style={{marginLeft:'120px'}}>Explore All The Adventures</h2>
            <p style={{marginLeft:'120px'}}>Here is the list of Adventures That you Can Explore The City</p> <br /> <br />
            
            <div style={{display:'flex',flexWrap:'wrap',marginLeft:"100px",gap:'20px'}}>
            {bangData.map(res=>{
                
            return(
            <Bang imageSrc={res.imageSrc} span1={res.span1} span2={res.span2} />
             )})}
        </div> <br /><br /><br /><br />
        <div>
            <p style={{textAlign:'center',backgroundColor:'#f1f1f1',padding:'20px 0 20px 0'}}>QTrip 2020</p>
        </div>
            </>
        )
    }
}
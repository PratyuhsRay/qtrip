import React, {Component} from 'react'
// import {Link} from "react-router-dom"
export default class Cards extends Component{
    render(){
        return(
            <>
            <div style={{position:"relative"}}>
                
                    <img src={this.props.imgSrc} alt=''></img>
                    
                    <h2 style={{position:'absolute',color:'white',bottom:'120px',left:"100px"}}>{this.props.place}</h2>
                    <h3 style={{position:'absolute',color:'white',bottom:'100px',left:"100px"}}>{this.props.placevisits}</h3>
                    
            </div>
            </>
        )
    }
}
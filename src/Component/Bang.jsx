import {Link} from "react-router-dom"
import React,{Component} from "react"
export default class Bang extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
                    <div style={{width:"310px", height:"460px",borderRadius:'10px',border:"0.5px solid gray"}} >
                    
                    <Link to="/card2"> <img  src={this.props.imageSrc} alt="" /> </Link>
                    <span style={{marginLeft:'40px',fontSize:'17px'}} >{this.props.span1}</span> 
                    <span style={{marginLeft:'110px',fontSize:'17px'}}  >{this.props.span2}</span>
        
                    </div>  
            </>
        )
    }
}
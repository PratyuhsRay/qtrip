import React,{Component} from "react"
import Navbar from "./Nav"
// import { Link } from "react-router-dom"
export default class Resort extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <Navbar/>
            <div className="maindiv">
                <div id="imgandtext" style={{padding:'20px'}}>
                    <div id="imagediv" style={{display:'flex'}}>
                        <div id="leftimgs">
                            <img style={{width:'540.25px',height:'532.25px',borderRadius:'0'}} src="https://zubairhadi1249-me-qtripstatic.vercel.app/assets/adventures/resort/resort1.jpg" alt="" />
                        </div>
                    
                        <div id="rightimgs" style={{marginLeft:'20px'}}>
                            <img style={{width:'258.13px',height:'258.13px',borderRadius:'0'}} src="https://zubairhadi1249-me-qtripstatic.vercel.app/assets/adventures/resort/resort2.jpg" alt="" /> <br />
                            <img style={{width:'258.13px',height:'258.13px',borderRadius:'0',marginTop:'-8px'}} src="https://zubairhadi1249-me-qtripstatic.vercel.app/assets/adventures/resort/resort3.jpg" alt="" />
                        </div>
                    </div> 
                    <div className="text">
                        <p><b>Sunshine Resort</b></p>
                        <p style={{fontSize:'16px'}}>Relax and unwind yourself</p> <br />
                        <p style={{borderBottom:'2px solid grey'}}></p> <br />
                        <h3>About the Experience</h3> <br />
                        <p style={{fontSize:'16px'}}>Chairman’s Jade Resort is constructed in the most natural setting for a day out that pleases the senses. The property is spread over eight acres of land with facilities for both indoor and outdoor adventures. Get active in the pool with a game of water polo or try some archery. For the indoor sort, there are a host of popular games and adventures. If that is not enticing enough head to the gymnasium!</p> <br />
                        <p>Inclusions</p>
                        
                        <ul id="textid" style={{fontSize:'16px'}}>
                            <li>Swimming pool access</li>
                            <li>Outdoor sports - Water Polo, Archery, Tennis, and Zorbing</li>
                            <li>Indoor games - Indoor Squash, Table Tennis, Carrom, Badminton, Chess, Billiards, and X-Box 360 KINECT</li>
                            <li>Parking</li> <br />
                        </ul>
                        <p>Know before you go</p>
                        <ul style={{fontSize:'16px'}}>
                            <li>Game accessories like balls and shuttlecocks will need to be purchased</li>
                            <li>All adventures and game accessories are subject to availability</li>
                            <li>Nylon swimwear must be worn at all times when using the swimming pool</li>
                            <li>Children must be accompanied by parents or guardians at all times</li>
                            <li>Complimentary entry for children below the height of three feet A valid photo ID is mandatory to enter the resort</li> <br />
                        </ul>
                        <p>Not Included</p>
                        <ul type="disc" style={{fontSize:'16px'}}>
                            <li>Swimwear</li>
                            <li>Pickup and drop</li>
                            <li>Towel</li>
                        </ul>
                    </div>
                    
                </div>
                <span id="sold" style={{padding:'10px'}}>
                    <h2>Sold Out</h2> <br />
                    <p style={{borderBottom:'1px solid grey'}}></p> <br />
                    <p>This advanture is currently sold out, But there is always more to  
                    <span style={{color:'#ffa90b',cursor:'pointer'}}> <b>explore</b></span> </p>  <br /><br />
                        
                </span>
            </div> <br /><br />
            <div>
            <p style={{textAlign:'center',backgroundColor:'#f1f1f1',padding:'20px 0 20px 0'}}>QTrip 2020</p>
        </div>
            </>    
        )
    }
}
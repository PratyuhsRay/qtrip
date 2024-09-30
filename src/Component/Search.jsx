import React, {Component} from 'react'


export default class Search extends Component{
    render(){
        return(
            <>
            <div id='backimg'>
                <div id='text'>
                <h1 id='welcome'>Welcome to Qtrip</h1>
                <p id='explore'>Explore the world with fantasrtic places to venture</p>
                <input id='box' type="text" placeholder='Search a City' />
                </div>
            </div>
            <br />
            </>
        )
    }
}
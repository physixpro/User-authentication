import React, {Component} from 'react'

class List extends Component{

    constructor(){
        super()
        this.state={
            name: "Tom"
        }
    }

    showSomeone(){
        this.setState({
            name: "Dick"
        })
    }

    render(){
        return(
            <div>
               <h1>My name is {this.state.name}</h1>
               <button onClick = { () => this.showSomeone()}>Go!</button>
            </div>
        )
    }
        
    }


export default List;
import React, {Component} from 'react'

class Message extends Component{
   
    constructor(){
        super()
        this.state = {
            name: 'Keagan St. Rose'
        }
    }

changeName(){
    this.setState({
        name: 'Sebastian'
    })
}

    render(){
        return(
            <div>
                <h1>Welcome to the portal,{this.state.name}.</h1>
                <button onClick ={() => this.changeName()}>Click this to greet a new user</button>
              
            </div>
        )
    }
}

export default Message
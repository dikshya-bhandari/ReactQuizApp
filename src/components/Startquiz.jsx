
import React, {Component} from 'react'
class Startquiz extends Component{
    state={}
    render(){
        return(
            <div className="start-btn">
            <button onClick={()=>this.props.onStartQuizPress()}>Start quiz</button>
        </div>
        )
    }
}


export default Startquiz;
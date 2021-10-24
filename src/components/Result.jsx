import React, {Component} from "react";

class Result extends Component{
    state={};
    render(){
        return(
            <div className="result-box">
    {/* <div class="icon">
        <i class="fas fa-crown"></i>
    </div> */}

    <div className="complete-text">You have completed the Quiz!</div>
    <div className="score-text">
        <span>and sorry, you got only <p>{this.props.correct}</p>out of<p>{this.props.total}</p></span>
        </div>
        
        <div className="buttons">
            <button className="restart" onClick={this.props.onReplayPress}>Replay Quiz</button>
            <button className="quit" onClick={this.props.onQuitPress}>Quit</button>
        </div>
    </div>

        )
    }
}

export default Result;
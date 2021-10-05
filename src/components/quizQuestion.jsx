import React, { Component } from 'react';
import Questions from '../question';
class QuizQuestion extends Component{
    state={ 
        questionIndex:0
    }
     onNextButtonPress=()=>{
         this.setState({questionIndex:this.state.questionIndex+1});
     }
    render(){
        return(
            <>
            <div className="quiz-box">
        <header>
            <div className="title">Awesome Quiz Application</div>
            <div className="timer">
                <div className="time-text">Time Left</div>
                <div className="time-sec">15</div>
            </div>
            
        </header>

        <section>
            <div className="que-text">
                 <span>{Questions[this.state.questionIndex].question}
                 </span> 
            </div>

            <div className="option-list">
                 <div className="option">
                    <span>{Questions[this.state.questionIndex].option[0]}</span>
                    <div className="icon-ticks"><i class="fa fa-check"></i></div>
                </div>

                <div className="option">
                    <span>{Questions[this.state.questionIndex].option[1]}</span>
                    <div className="icon-cross"><i class="fa fa-times"></i></div>
                </div>

                <div className="option">
                    <span>{Questions[this.state.questionIndex].option[2]}</span>
                </div>

                <div className="option">
                    <span>{Questions[this.state.questionIndex].option[3]}</span>
                </div>
            </div>
        </section>

    
        <footer>
        <div className="total-que">
             <span><p>{this.state.questionIndex+1}</p>Of<p>{Questions.length}</p>Questions</span>
        </div>

        <button onClick={this.onNextButtonPress} className="next-btn">Next Que</button>
    
        </footer>
    </div>
            </>
        )
    }
}

export default QuizQuestion;
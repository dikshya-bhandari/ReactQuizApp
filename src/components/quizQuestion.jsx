import React, { Component } from 'react';
import Questions from '../question';
class QuizQuestion extends Component{
    constructor(){
        super();
        this.state={ 
            questionIndex:0,
            time:15,
            userAnswers:[]
        };
        this.timer=0;
    }

    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState({time:this.state.time-1});
            if(this.state.time==0){
                this.onNextButtonPress();
            }else if(
                this.state.time==0 && this.state.questionIndex==Questions.length-1
            ){
                clearInterval(this.timer);
            }
        },1000);
    }
    
     onNextButtonPress=()=>{
         if(this.state.questionIndex==4){
             this.props.showResult(this.calculateCorrectAnswers(),Questions.length);
         }else{
         this.setState({questionIndex:this.state.questionIndex+1, time:15});
     }};

     calculateCorrectAnswers=()=>{
         let correct=0;
         Questions.forEach((question,i)=>{
             if(question.answer==this.state.userAnswers[i]){
                correct +=1;
             }
         })
         return correct; 
     };

     onOptionClick=(option,i)=>{
         let userAnswers=[...this.state.userAnswers];
         userAnswers[i]=option;
         this.setState({userAnswers:userAnswers});
     };

     getBackgroundColor=(option)=>{
         if(!this.state.userAnswers[this.state.questionIndex]){
             return "#fff";
         }else{
             if(Questions[this.state.questionIndex].answer==this.state.userAnswers[this.state.questionIndex]){
                 if(this.state.userAnswers[this.state.questionIndex]==option){
                     return "#0f0";
                 }else{
                     return "#fff"
                 }
             }else{
                 if(this.state.userAnswers[this.state.questionIndex]==option){
                     return "#f00";
                 }else if(Questions[this.state.questionIndex].answer==option){
                     return "#0f0";
                 }else{
                     return "#fff";
                 }
             }
         }
     }
    
    render(){
        return(
            <>
            <div className="quiz-box">
        <header>
            <div className="title">Awesome Quiz Application</div>
            <div className="timer">
                <div className="time-text">Time Left</div>
                <div className="time-sec">{this.state.time}</div>
            </div>
            
        </header>

        <section>
            <div className="que-text">
                 <span>{Questions[this.state.questionIndex].question}
                 </span> 
            </div>

            <div className="option-list">
                {Questions[this.state.questionIndex].option.map((option,i)=>(
                    <div  onClick={()=>!this.state.userAnswers[this.state.questionIndex]&&this.onOptionClick(option, this.state.questionIndex)} className="option" key={i}
                    style={{backgroundColor:this.getBackgroundColor(option)}}>
                        <span>{option}</span>
                    </div>
                ))}
                 
                
            </div>
        </section>

    
        <footer>
        <div className="total-que">
             <span><p>{this.state.questionIndex+1}</p>Of<p>{Questions.length}</p>Questions</span>
        </div>
         {this.state.userAnswers[this.state.questionIndex]&&(           
        <button onClick={this.onNextButtonPress} className="next-btn">Next Que</button>)}
    
        </footer>
    </div>
            </>
        )
    }
}

export default QuizQuestion;
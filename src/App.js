import React, {Component} from 'react';
import Start from './components/Startquiz';
import QuizRules from './components/Rules';
import QuizQuestion from './components/quizQuestion';
import './App.css'

class App extends Component{
  state={
    page:"start",
  };
  onStartQuizPress=()=>{
    this.setState({page:"rule"});
  };

  onExitRulePress=()=>{
    this.setState({page:"start"});
  }

  onContinueRulePress=()=>{
    this.setState({page:"quizQuestion"})
  }


  render(){
    return(
      <>
      {
        this.state.page=="start" && <Start onStartQuizPress={this.onStartQuizPress}/>
      }
      {
        this.state.page=="rule" && <QuizRules onExitRulePress={this.onExitRulePress} onContinueRulePress={this.onContinueRulePress}/>
      }

      {
        this.state.page=="quizQuestion" && <QuizQuestion/>
      }
      </>

    )
  }
}
export default App;
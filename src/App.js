import React, {Component} from 'react';
import Start from './components/Startquiz';
import QuizRules from './components/Rules';
import QuizQuestion from './components/quizQuestion';
import Result from './components/Result';
import './App.css'

class App extends Component{
  state={
    page:"start",
    correct:0,
    total:0,
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

  onShowResultPress=(correct,total)=>{
    this.setState({page:"result", correct:correct,total:total});
  }

  onReplayPress=()=>{
    this.setState({page:"quizQuestion"});
  };

  onQuitPress=()=>{
    this.setState({page:"start"});
  };


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
        this.state.page=="quizQuestion" && <QuizQuestion showResult={this.onShowResultPress}/>
      }

      {
        this.state.page=="result" && <Result correct={this.state.correct} total={this.state.total} onReplayPress={this.onReplayPress} onQuitPress={this.onQuitPress}/>
      }
      </>

    )
  }
}
export default App;
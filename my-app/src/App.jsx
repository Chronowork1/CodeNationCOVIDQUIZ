import React, { Component } from 'react';
import {Question, Question1, Question2} from './question.jsx';
import {Flowchart} from './flowchart.jsx';

class App extends React.Component(){
    constructor(props){
        super(props);
        //this.state={
        //    currentQuestion: Flowchart.question1
        //}
    }
    render(){
        return (
            <div>
                <Question questiontext={this.state.currentQuestion}/>
            </div>
        )
    }
}

export default App;

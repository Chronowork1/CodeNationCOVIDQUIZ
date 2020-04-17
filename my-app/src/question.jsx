import React, {Component} from 'react';
import {Flowchart} from './flowchart.jsx';

export class Question extends React.Component(){
    constructor(question){
        this.question = question;
    }
    render(){
        return(
            <div>
                <h1>{this.props.questionText}</h1>
            </div>
        )
    }
}

export class Question1 extends Question{
    constructor(question){
        super(question)
        this.question = Flowchart[0].question1
    }
}

export class Question2 extends Question{
    constructor(question){
        super(question)
        this.question = Flowchart[1].question2
    }
}
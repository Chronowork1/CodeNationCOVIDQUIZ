import React, { Component } from 'react';

// 2 ways to create a component: 
// 1. Function that has props as an argument!
function Score(props) {
    return (
        <p>This is my component! {props.question}</p>
    );
}

// 2. Class component
class Score extends React.Component(){
    constructor(props){
        super(props);
    }
    render(){
        return (
             <p>This is my component! {props.question}</p>
        );
    }
}

// How to use the component:
<Score question={"What is social distancing?"} />
import React, { Component } from 'react';
class OpenQuiz extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        const { openQuizPage,back,startFunc } = this.props;
        console.log(startFunc);
        return ( 
            
  

                // <h1></h1><h2>{openQuizPage.questions} Questions</h2><h3>{openQuizPage.time}</h3><h1>------</h1>
                // <hr />
<div class="container gap">

<nav class="navbar navbar-primary bg-primary">
            <span class="navbar-brand mb-0 h1" style={{color: 'white'}}>QUIZ APP</span>
            
          </nav>
            <ul class="list-group mt-5">
            <li class="list-group-item active">{openQuizPage.name}</li>
                {
                    openQuizPage.list.map((value,index) => {
                        
                return <li class="list-group-item" onClick={() => startFunc(index)}>QUIZ {index + 1}</li>
                    })
                }
                </ul>
                <button class="btn btn-primary mt-3" onClick={back}>Back to list</button>
            </div>
            
         );
    }

    start(index){
        const { startFunc } = this.props;
        console.log('first/*****' + index);
        startFunc(index);

    }
}
 
export default OpenQuiz;
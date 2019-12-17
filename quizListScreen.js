import React, { Component } from 'react';
class QuizListScreen extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        const { quizList,listDisa } = this.props;
        console.log(listDisa);
        return ( 
            
        <div class="container">

<nav class="navbar navbar-primary bg-primary">
            <span class="navbar-brand mb-0 h1" style={{color: 'white'}}>DASHBOARD</span>
            
          </nav>
       <button class="btn btn-primary mt-3 mb-3" onClick={this.clear}>LOGOUT</button>
            {quizList.map((res,index) => {
                console.log(res);
                //   return (<div><h1>{res.name}</h1><button onClick={() => listDisa(index)}>Open</button><hr /></div>);
               return(
                <div class="card mt-5" style={{width: '50%',minWidth: 320}}>
                <img class="card-img-top" src="https://sketchtricks.com/wp-content/uploads/2017/01/cover-sketch-to-html-with-uipad.png" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{res.name}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button class="btn btn-primary" onClick={() => listDisa(index)}>OPEN</button>
                </div>
                      </div>
               )

            })}
            </div>
         );
    }

    clear(){
        localStorage.removeItem('quizAppLogin');
        window.location.reload();
    }
}
 
export default QuizListScreen;
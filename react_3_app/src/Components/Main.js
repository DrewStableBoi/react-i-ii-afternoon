import React, { Component } from 'react';
import Data from '../data.js';
import Body from './Body.js';


class Main extends Component {
    constructor() {
      super();

      this.state = {
        counter: 0,
        displayCounter: Data[0].id,
        person: Data[0],
        dataArr: Data
      };
  
      this.handleClickNext = this.handleClickNext.bind(this);
      this.handleClickPrevious = this.handleClickPrevious.bind(this);
      this.handleClickEdit = this.handleClickEdit.bind(this);
      this.handleClickNew = this.handleClickNew.bind(this);
      this.handleClickDelete = this.handleClickDelete.bind(this); 
      this.updateDate = this.updateData.bind(this);   
    }
  
    handleClickNext() {
        let cody = this.state.counter;
        if(cody < Data.length - 1) {
            this.setState({counter: this.state.counter + 1,
                            person: Data[this.state.counter + 1],
                            displayCounter: Data[this.state.counter + 1].id}) 
        }
        else 
        {alert(`There are no more people to display`)}
    };
  
    handleClickPrevious() {
        let steve = this.state.counter;
        if(steve > 0) {
        this.setState({counter: this.state.counter - 1,
                        person: Data[this.state.counter - 1],
                        displayCounter: Data[this.state.counter - 1].id}) 
        }
        else 
        {alert(`You are at the beginning of the database`)}

    };

  
    handleClickEdit() {
        alert("Coming soon to a React App near you");        
    };
  
    handleClickNew() {
        alert("Coming soon to a React App near you");

    };
  
    handleClickDelete() {
    //     console.log(this.state);
    //     let copyArr = this.state.dataArr.slice();
    //     console.log(copyArr);

    //     if(this.state.counter <= copyArr.length && copyArr.length > 1)  {
    //         copyArr.splice(this.state.counter, 1);
    //         this.updateData(copyArr);
    //     }

    //     if(this.state.counter === this.state.dataArr.length - 1 && this.state.dataArr.length > 1) {
    //         this.setState({ counter: this.state.counter - 1});
    //     }

    //     else if (this.copyArr.length === 1) {
    //         return alert("This is the last name in the list - you can't delete it!")
    //     }
        alert("Coming soon to a React App near you")
    };

    updateData(arr) {
        this.setState({dataArr: arr})
    };
  
    render() {
      return(
      <div>
         <Body handleClickNext = {this.handleClickNext} 
                handleClickPrevious = {this.handleClickPrevious}
                handleClickNew = {this.handleClickNew}
                handleClickEdit = {this.handleClickEdit}
                handleClickDelete = {this.handleClickDelete}
                displayCounter = {this.state.displayCounter}
                counter = {this.state.counter}
                person = {this.state.person}
                /> 
      </div>
      )
    }
  
  };
  
  export default Main;
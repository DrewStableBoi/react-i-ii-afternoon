import React, { Component } from "react";
import Data from "../data.js";
import Body from "./Body.js";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      dataArr: Data,
      counter: 0,
      displayCounter: Data[0].id,
      person: Data[0]
    };

    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleClickPrevious = this.handleClickPrevious.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleClickNew = this.handleClickNew.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
    this.updateDateDelete = this.updateDataDelete.bind(this);
    this.updateDataEdit = this.updateDataEdit.bind(this);
  }

  updateDataDelete(arr) {
    let counter = this.state.counter - 1 >= 0 ? this.state.counter : 0;
    counter = counter < arr.length ? counter : arr.length - 1;
    const user = arr[counter];
    this.setState({
      dataArr: arr,
      displayCounter: user.id,
      person: user,
      counter: counter
    });
  }

  updateDataEdit(arr) {
    this.setState({
      dataArr: arr,
      person: arr[this.state.counter]
    });
  }

  handleClickNext() {
    let cody = this.state.counter;
    if (cody < this.state.dataArr.length - 1) {
      this.setState({
        counter: this.state.counter + 1,
        person: this.state.dataArr[this.state.counter + 1],
        displayCounter: this.state.dataArr[this.state.counter + 1].id
      });
    } else {
      alert(`There are no more people to display`);
    }
  }

  handleClickPrevious() {
    let steve = this.state.counter;
    if (steve > 0) {
      this.setState({
        counter: this.state.counter - 1,
        person: this.state.dataArr[this.state.counter - 1],
        displayCounter: this.state.dataArr[this.state.counter - 1].id
      });
    } else {
      alert(`You are at the beginning of the database`);
    }
  }

  handleClickEdit() {
    let copyArr = [...this.state.dataArr];

    let superSecret = function(element) {
      Object.keys(element).forEach(key => {
        if(key === 'favoriteMovies') {
          element[key] = [];
          return;
        }
        element[key] = "Edited";

      });
      return element;
    };

    let elementToPass = copyArr[this.state.counter];
    let updatedElement = superSecret(elementToPass);

    copyArr.splice(this.state.counter, 1, updatedElement);

    this.updateDataEdit(copyArr);
  }

  handleClickNew() {
    alert("Coming soon to a React App near you");
  }

  handleClickDelete() {
    let copyArr = [...this.state.dataArr];

    if (this.state.counter <= copyArr.length && copyArr.length > 1) {
      copyArr.splice(this.state.counter, 1);
      this.updateDataDelete(copyArr);
    }

    if (
      this.state.counter === this.state.dataArr.length - 1 &&
      this.state.dataArr.length > 1
    ) {
      this.setState({ counter: this.state.counter - 1 });
    } else if (copyArr.length === 1) {
      return alert("This is the last name in the list - you can't delete it!");
    }
  }

  render() {
    return (
      <div>
        <Body
          handleClickNext={this.handleClickNext}
          handleClickPrevious={this.handleClickPrevious}
          handleClickNew={this.handleClickNew}
          handleClickEdit={this.handleClickEdit}
          handleClickDelete={this.handleClickDelete}
          displayCounter={this.state.displayCounter}
          counter={this.state.counter}
          person={this.state.person}
          datalength={this.state.dataArr.length}
        />
      </div>
    );
  }
}

export default Main;

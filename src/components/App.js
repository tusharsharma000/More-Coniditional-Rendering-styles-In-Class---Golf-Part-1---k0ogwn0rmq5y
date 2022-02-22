import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
  }

  onKeyPressed(e) {
    if (e.keyCode === 39 && this.state.renderBall === true) {
      this.setState({ posi: this.state.posi + 5 }, () =>
        this.setState({ ballPosition: { left: this.state.posi + "px" } })
      );
    } else return;
  }

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyPressed.bind(this));
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;

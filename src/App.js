import React from "react";
import LoremIpsum from "./components/LoremIpsum";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfParagraph: 0
    };
    this.inputHandle = this.inputHandle.bind(this);
  }

  inputHandle(event) {
    const pattern = "[0-9]";
    const re = new RegExp(pattern);
    const isNumber = event.target.value.match(re);

    this.setState({
      numberOfParagraph:
        event.target.value > -1 && isNumber ? parseInt(event.target.value) : 0
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Lorem Ipsum</h1>
        <input
          className="loremInput"
          type="number"
          onChange={this.inputHandle}
          value={this.state.numberOfParagraph}
        />
        <LoremIpsum numberOfParagraph={this.state.numberOfParagraph} />
      </div>
    );
  }
}

export default App;

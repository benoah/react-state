import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes it is  ",
      name: "Ben ",
      age: "40",
    };
  }

  render() {
    return (
      <div>
        <h1>Is state important to know? {this.state.answer}</h1>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    );
  }
}

export default App;

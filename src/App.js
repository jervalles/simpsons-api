import React from "react";
import DisplayEmployee from "./components/DisplayEmployee";
import axios from "axios";

const sampleEmployee = {
  character: "Waylon Smithers",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FWaylonSmithers.png?1497567511840",
  quote: "I think women and seamen don't mix"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: sampleEmployee
    };
    this.getEmployee = this.getEmployee.bind(this);
  }

  getEmployee() {
    // Send the request
    axios
      .get("https://quests.wilders.dev/simpsons-quotes/quotes")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          employee: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <DisplayEmployee employee={this.state.employee} />
        <button type="button" onClick={this.getEmployee}>
          Get new Simpson
        </button>
      </div>
    );
  }
}
export default App;

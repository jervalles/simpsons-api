import React from "react";
import DisplaySimpson from "./components/DisplaySimpson";
import axios from "axios";

const sampleSimpson = {
  character: "Waylon Smithers",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FWaylonSmithers.png?1497567511840",
  quote: "I think women and seamen don't mix"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Simpson: sampleSimpson
    };
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
    // Send the request
    axios
      .get("https://quests.wilders.dev/simpsons-quotes/quotes")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          Simpson: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <DisplaySimpson Simpson={this.state.Simpson} />
        <button type="button" onClick={this.getSimpson}>
          Get new Simpson
        </button>
      </div>
    );
  }
}
export default App;

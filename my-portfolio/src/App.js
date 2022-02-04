import React, { Component } from "react";

class App extends Component {

  /*
  constructor() {
    super();
    this.state = { displayBio: false };
    console.log('This - Component', this);
    this.readMore = () => {
      console.log('This - readMore', this); // here this is undefined
      this.setState({ displayBio: true});
    };
    this.readMore = this.readMore.bind(this);
    this.showLess = this.showLess.bind(this);
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }// */

  // works the same as declaring it in the _ctor_
  state = { displayBio: false };

  /* only works correctly with "binding" the method as above within the _ctor_
  readMore () {
    // this.state.displayBio = true; // it's bad to alter the state of a component directly
    // console.log('readMore this', this); // `this` here is undefined, if method wasn't bound inside the _ctor_
    this.setState({ displayBio: true});
  };
  showLess () {
    this.setState({ displayBio: false});
  };
  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }// */

  // works the same as declaring the method like above and then doing the binding or
  // declaring `this.toggleDisplayBio = () => { ... }` within the _ctor_
  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>I'm ArrrTeee. I work as a software engineer.</p>
        <p>I'm happy to meet you.</p>
        {this.state.displayBio ? (
            <div>
              <p>I live on Earth and like to breathe air</p>
              <p>Javascript is OK.</p>
              <p>Before entering please knock.</p>
              <div>
                  <button onClick={this.toggleDisplayBio} name="btn01" id="btn01">Show less</button>
              </div>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio} name="btn01" id="btn01">Read more</button>
            </div>
        )}
      </div>
    );
  }
}

export default App;

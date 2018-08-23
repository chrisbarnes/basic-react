import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggleInput = this.toggleInput.bind(this);
  }
  
  toggleInput() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  submitForm() {
    alert('form submitted');
  }

  render() {
    const formClasses = this.state.isOpen ? 'input-box input-box--open' : 'input-box';
    return (
      <div className="App">
        <button type="button" onClick={this.toggleInput}>hello</button>

        <form className={formClasses}>
          <input type="text" />
          <button type="button" onClick={this.submitForm}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;

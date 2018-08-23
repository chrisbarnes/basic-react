import React, { Component } from 'react';
import Button from './Button';
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
        <Button onClick={this.toggleInput}>hello</Button>

        <form className={formClasses}>
          <input type="text" />
          <Button onClick={this.submitForm}>Submit</Button>
        </form>
      </div>
    );
  }
}

export default App;

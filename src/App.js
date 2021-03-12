import React from 'react';
import Pug from 'pug';

import './App.css';

import Input from './component/Input.js';
import Render from './component/Render.js';
import Output from './component/Output.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      html: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let html;

    try {
      html = Pug.render(event.target.value);
    } catch (error) {
      console.log(error);

      html = 'Render error (info in console)';
    }

    this.setState({
      input: event.target.value,
      html,
    });
  }

  render() {
    return (
      <div className='app'>
        <Input input={this.state.input} handleChange={this.handleChange} />
        <Render html={this.state.html} />
        <Output html={this.state.html} />
      </div>
    );
  }
}
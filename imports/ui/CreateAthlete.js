import React, { Component } from 'react';
import { Athletes } from '../api/athletes';

class CreateAthlete extends Component {
  state = { firstName: '', lastName: '' };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    Athletes.insert({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      createdAt: new Date(),
    });
    this.setState({ firstName: '', lastName: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name={'firstName'}
          type={'text'}
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder={'Vardas'}
        />
        <input
          name={'lastName'}
          type={'text'}
          value={this.state.lastName}
          onChange={this.handleChange}
          placeholder={'Pavarde'}
        />
        <input type={'submit'} value={'Submit'} />
      </form>
    );
  }
}

export default CreateAthlete;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Athlete from './Athlete';
import { Athletes } from '../api/athletes';

class App extends Component {
  state = { name: '' };

  handleChange = e => this.setState({ name: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    Athletes.insert({
      name: this.state.name,
      createdAt: new Date(),
    });
    this.setState({ name: '' });
  }

  renderAthletes = () => this.props.athletes.map(athlete => (
    <Athlete key={athlete._id} athlete={athlete} />
  ));


  render() {
    return (
      <div>
        <header>
          <h1>Sporto centro DB</h1>
        </header>

        <form onSubmit={this.handleSubmit}>
          <input
            type={'text'}
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input type={'submit'} value={'Submit'} />
        </form>

        <ul>
          {this.renderAthletes()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  athletes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;

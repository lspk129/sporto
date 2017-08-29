import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Athlete from './Athlete';
import CreateAthlete from './CreateAthlete';

class App extends Component {
  state = { show: false };

  handleClick = () => this.setState({ show: !this.state.show });

  renderAthletes = () => this.props.athletes.map(athlete => (
    <Athlete key={athlete._id} athlete={athlete} />
  ));

  render() {
    return (
      <div>
        <header>
          <h2>Sporto centro DB</h2>
        </header>
        {this.state.show && <CreateAthlete />}
        <input
          type={'button'}
          value={this.state.show ? 'Uždaryti' : 'Sukurti naują vartotoją'}
          onClick={this.handleClick}
        />
        <ul>
          {this.renderAthletes()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  athletes: PropTypes.arrayOf(PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;

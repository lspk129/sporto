import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import { Athletes } from '../api/athletes';

class CreateAthlete extends Component {
  state = {
    firstName: '',
    lastName: '',
    birthDate: moment(),
    gender: '',
    sport: '',
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleDateChange = date => this.setState({ birthDate: date });
  handleSubmit = (e) => {
    e.preventDefault();
    Athletes.insert({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birthDate: this.state.birthDate.format('YYYY-MM-DD'),
      gender: this.state.gender,
      sport: this.state.sport,
      createdAt: new Date(),
    });
    this.setState({ firstName: '', lastName: '', birthDate: moment(), gender: '', sport: '' });
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
        <DatePicker
          selected={this.state.birthDate}
          onChange={this.handleDateChange}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
        <select
          name={'gender'}
          value={this.state.gender}
          onChange={this.handleChange}
        >
          <option value="" disabled hidden>Lytis</option>
          <option value="Vyras">Vyras</option>
          <option value="Moteris">Moteris</option>
        </select>
        <select
          name={'sport'}
          value={this.state.sport}
          onChange={this.handleChange}
        >
          <option value="" disabled hidden>Sporto šaka</option>
          {['Dziudo', 'Boksas', 'Laisvosios imtynės', 'Graikų-Romėnų imtynės', 'Sambo', 'Sunkioji atletika']
            .map(sport => <option key={sport} value={sport}>{sport}</option>)
          }
        </select>

        <input type={'submit'} value={'Submit'} />
      </form>
    );
  }
}

export default CreateAthlete;

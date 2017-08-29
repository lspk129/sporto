import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import { Athletes } from '../api/athletes';

const CreateForm = styled.form`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-gap: 20px;
  border: 1px solid #f3f3f3;
  padding: 20px
`;

class CreateAthlete extends Component {
  state = {
    firstName: '',
    lastName: '',
    birthDate: moment(),
    gender: '',
    sport: '',
    couch: '',
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
      couch: this.state.couch,
      createdAt: new Date(),
    });
    this.setState({ firstName: '', lastName: '', birthDate: moment(), gender: '', sport: '', couch: '' });
  }

  render() {
    return (
      <CreateForm onSubmit={this.handleSubmit}>
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
        <select
          name={'couch'}
          value={this.state.couch}
          onChange={this.handleChange}
        >
          <option value="" disabled hidden>Treneris</option>
          {['Edvard Balcevič', 'Vladimiras Audickas', 'Edvard Malyško', 'Oleg Antoščenkov',
            'Valdemaras Venckaitis', 'Valerijus Krivojus', 'Vladimir Gaibel',
            'Ivanas Minkevičius', 'Stanislav Šestak', 'Eduard Špakov', 'Stanislavas Mižigurskis',
            'Jan Romanovskij', 'Alebert Techov', 'Eduard Techov', 'Artūras Zaicevas',
            'Svetlana Vetrova', 'Darius Jukonis', 'Algis Mečkovskis', 'Stasys Bazys',
            'Anastasija  Michailova', 'Viačeslav Fiodorov', 'Jurijus Babenko',
            'Svajūnas Polikevičius', 'Eduardas Rudas', 'Mindaugas Janulis']
            .map(couch => <option key={couch} value={couch}>{couch}</option>)
          }
        </select>

        <input type={'submit'} value={'Išsaugoti'} />
      </CreateForm>
    );
  }
}

export default CreateAthlete;

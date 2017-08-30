import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Athletes } from '../api/athletes';

const StyledDatePicker = styled(DatePicker)`
  align-self: end;
`;

const StyledRaisedButton = styled(RaisedButton)`
  margin: 0 10px;
`;

const ButtonSection = styled.div`
  margin: 40px 10px 0;
  display: flex;
  justify-content: center;
`;

const FormSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

const Title = styled.h2`
  display: grid;
  justify-items: center;
`;

const Form = styled.form`
  width: 700px;
  margin: 50px 0;
  padding: 20px;
  color: rgba(0, 0, 0, 0.87);
  background-color: rgb(255, 255, 255);
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px;
  border-radius: 2px;
`;

class CreateAthlete extends Component {
  state = {
    firstName: '',
    lastName: '',
    birthDate: null,
    gender: '',
    sport: '',
    couch: '',
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleDateChange = date => this.setState({ birthDate: date });
  handleGenderChange = (event, index, value) => this.setState({ gender: value });
  handleSportChange = (event, index, value) => this.setState({ sport: value });
  handleCouchChange = (event, index, value) => this.setState({ couch: value });
  handleDateChange = (event, date) => this.setState({ birthDate: date });

  clearForm = () => this.setState({
    firstName: '',
    lastName: '',
    birthDate: null,
    gender: '',
    sport: '',
    couch: '',
  });

  handleSubmit = (e) => {
    e.preventDefault();
    Athletes.insert({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birthDate: moment(this.state.birthDate).format('YYYY-MM-DD'),
      gender: this.state.gender,
      sport: this.state.sport,
      couch: this.state.couch,
      createdAt: new Date(),
    });
    this.clearForm();
  }

  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
        <Title>Sportininko anketa</Title>
        <FormSection>
          <TextField
            name={'firstName'}
            value={this.state.firstName}
            onChange={this.handleChange}
            floatingLabelText={'Vardas'}
          />
          <TextField
            name={'lastName'}
            value={this.state.lastName}
            onChange={this.handleChange}
            floatingLabelText={'Pavardė'}
          />

          <StyledDatePicker
            hintText="Gimimo metai"
            value={this.state.birthDate}
            onChange={this.handleDateChange}
            openToYearSelection
            DateTimeFormat={Intl.DateTimeFormat}
            cancelLabel="Anuliuoti"
            locale="lt"
            autoOk
          />

          <SelectField
            floatingLabelText="Lytis"
            value={this.state.gender}
            onChange={this.handleGenderChange}
          >
            <MenuItem value={'Vyras'} primaryText={'Vyras'} />
            <MenuItem value={'Moteris'} primaryText={'Moteris'} />
          </SelectField>

          <SelectField
            floatingLabelText="Sporto šaka"
            value={this.state.sport}
            onChange={this.handleSportChange}
          >
            {['Dziudo', 'Boksas', 'Laisvosios imtynės', 'Graikų-Romėnų imtynės',
              'Sambo', 'Sunkioji atletika']
              .map(sport => <MenuItem key={sport} value={sport} primaryText={sport} />)
            }
          </SelectField>

          <SelectField
            floatingLabelText="Treneris"
            value={this.state.couch}
            onChange={this.handleCouchChange}
          >
            {['Edvard Balcevič', 'Vladimiras Audickas', 'Edvard Malyško', 'Oleg Antoščenkov',
              'Valdemaras Venckaitis', 'Valerijus Krivojus', 'Vladimir Gaibel',
              'Ivanas Minkevičius', 'Stanislav Šestak', 'Eduard Špakov', 'Stanislavas Mižigurskis',
              'Jan Romanovskij', 'Alebert Techov', 'Eduard Techov', 'Artūras Zaicevas',
              'Svetlana Vetrova', 'Darius Jukonis', 'Algis Mečkovskis', 'Stasys Bazys',
              'Anastasija  Michailova', 'Viačeslav Fiodorov', 'Jurijus Babenko',
              'Svajūnas Polikevičius', 'Eduardas Rudas', 'Mindaugas Janulis']
              .map(couch => <MenuItem key={couch} value={couch} primaryText={couch} />)
            }
          </SelectField>
        </FormSection>
        <ButtonSection>
          <StyledRaisedButton primary label={'Išsaugoti'} type={'submit'} />
          <StyledRaisedButton secondary label={'Išvalyti'} onClick={this.clearForm} />
        </ButtonSection>
      </Form>

    );
  }
}

export default CreateAthlete;

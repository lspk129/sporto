import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow } from 'material-ui/Table';
import Athlete from './Athlete';
import CreateAthlete from './CreateAthlete';

const Section = styled.div`
  padding: ${({ contactForm }) => contactForm ? '20px 0' : '20px'};
`;

class App extends Component {
  state = { show: false };

  handleClick = () => this.setState({ show: !this.state.show });

  renderAthletes = () => this.props.athletes.map(athlete => (
    <Athlete key={athlete._id} athlete={athlete} />
  ));

  render() {
    return (
      <MuiThemeProvider>
        <Section>
          <AppBar
            title="Sporto centras"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Section contactForm>
            {this.state.show && <CreateAthlete />}
            <RaisedButton
              label={this.state.show ? 'Uždaryti' : 'Sukurti naują sportininką'}
              onClick={this.handleClick}
            />
          </Section>
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Vardas</TableHeaderColumn>
                <TableHeaderColumn>Gimimo metai</TableHeaderColumn>
                <TableHeaderColumn>Lytis</TableHeaderColumn>
                <TableHeaderColumn>Sporto šaka</TableHeaderColumn>
                <TableHeaderColumn>Treneris</TableHeaderColumn>
                <TableHeaderColumn>Redaguoti</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {this.renderAthletes()}
            </TableBody>
          </Table>
        </Section>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  athletes: PropTypes.arrayOf(String).isRequired,
};

export default App;

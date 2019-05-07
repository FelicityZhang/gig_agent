
import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import decode from 'jwt-decode';
import Login from './components/Login'
import Register from './components/Register'

import ShowArtists from './components/ShowArtists';
import ShowGigs from './components/ShowGigs';
import ShowGigItem from './components/ShowGigItem';

import {
  loginUser,
  registerUser,
  showGigs,
  showArtists
} from './services/api-helper'


class App extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      },
      artists: [],
      gigItem: null,
      gigs: []

    }
    // this.handleFormChange = this.handleFormChange.bind( this )
    this.handleLoginButton = this.handleLoginButton.bind( this )
    this.handleLogin = this.handleLogin.bind( this )
    this.handleRegister = this.handleRegister.bind( this )
    this.handleLogout = this.handleLogout.bind( this )
    this.authHandleChange = this.authHandleChange.bind( this )
  }

  // -------------------------------------Auth-----------------------------------------------------
  componentDidMount() {
    this.getArtists()
    this.getGigs()
    // token : checkuser
    const token = localStorage.getItem( "jwt" );
    if ( token ) {
      const userData = decode( token );
      this.setState( {
        currentUser: userData
      } )
    }
  }


  async handleLogin() {
    const userData = await loginUser( this.state.authFormData );
    this.setState( {
      currentUser: decode( userData.token )
    } )
    localStorage.setItem( "jwt", userData.token )
  }

  async handleRegister( e ) {
    e.preventDefault();
    await registerUser( this.state.authFormData );
    this.handleLogin();
  }

  handleLogout() {
    localStorage.removeItem( "jwt" );
    this.setState( {
      currentUser: null
    } )
  }

  authHandleChange( e ) {
    const { name, value } = e.target;
    this.setState( prevState => ( {
      authFormData: {
        ...prevState.authFormData,
        [ name ]: value
      }
    } ) );
  }

  handleLoginButton() {
    this.props.history.push( "/login" )
  }
  // -------------------------------------------------------------------------------------

  async getArtists() {
    const artists = await showArtists()
    this.setState( { artists } )
  }

  async getGigs() {
    const gigs = await showGigs()
    this.setState( { gigs } )
  }


  render() {
    return (
      <div className="App" >
        <div>
          { this.state.currentUser
            ?
            <>
              <p>{ this.state.currentUser.username }</p>
              <button onClick={ this.handleLogout }>logout</button>
            </>
            :
            <button onClick={ this.handleLoginButton }>Login/register</button>
          }
        </div>
        <Route exact path="/login" render={ () => (
          <Login
            handleLogin={ this.handleLogin }
            handleChange={ this.authHandleChange }
            formData={ this.state.authFormData } /> ) } />
        <Route exact path="/register" render={ () => (
          <Register
            handleRegister={ this.handleRegister }
            handleChange={ this.authHandleChange }
            formData={ this.state.authFormData } /> ) } />


        <Link to="/artist_infos">Artists</Link>&nbsp;
        <Link to="/gigs">Gigs</Link>

        <Route exact path="/gigs" render={ () => (
          <ShowGigs
            gigs={ this.state.gigs }
          />
        ) } />

        <Route path="/artist_infos" render={ () => (
          <ShowArtists artists={ this.state.artists } />
        ) } />

        <Route path="/gigs/:id" render={ () => (
          <ShowGigItem gigItem={ this.state.gigItem } />
        ) } />
      </div >
    )
  }
}

export default withRouter( App );

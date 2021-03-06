
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
import PostJob from './components/PostJob';
import SelectedJobs from './components/SelectedJobs';
import ProfilePage from './components/ProfilePage';


import {
  loginUser,
  registerUser,
  showGigs,
  showArtists,
  showUsers,
  postJob,
  showGigItem,
  showUserItem,
  putProfile
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
      postJobForm: {
        name: '',
        description: ''
      },
      artists: [],
      gigItem: null,
      gigs: [],
      selectedJobs: [],
      users: [],
      profileForm: {
        photo: '',
        role: '',
        price: '',
        description: ''
      }
    }
    // this.handleFormChange = this.handleFormChange.bind( this )
    this.handleLoginButton = this.handleLoginButton.bind( this )
    this.handleLogin = this.handleLogin.bind( this )
    this.handleRegister = this.handleRegister.bind( this )
    this.handleLogout = this.handleLogout.bind( this )
    this.addJob = this.addJob.bind( this );
    this.getGigItem = this.getGigItem.bind( this )
    this.handleFormChange = this.handleFormChange.bind( this );
    this.authHandleChange = this.authHandleChange.bind( this )
    this.handleProfileChange = this.handleProfileChange.bind( this )
    this.updateProfile = this.updateProfile.bind( this )
  }

  // -------------------------------------Auth-----------------------------------------------------
  async componentDidMount() {
    this.getArtists()

    this.getGigs()
    // token : checkuser
    const token = localStorage.getItem( "jwt" );
    if ( token ) {
      const userData = await decode( token );
      this.setState( {
        currentUser: userData
      } )
    }
    if ( this.state.currentUser ) {
      this.updateUser()
    }

  }


  async handleLogin() {
    const userData = await loginUser( this.state.authFormData );
    ///if ()  for error handling
    // if userData.token is not a token, show error message to user

    this.setState( {
      currentUser: decode( userData.token )
    } )
    localStorage.setItem( "jwt", userData.token )
    this.props.history.push( '/gigs' )
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

  async getUsers() {
    const users = await showUsers()
    this.setState( { users } )
  }

  async getGigItem( id ) {
    const gigItem = await showGigItem( id );
    this.setState( { gigItem } )
  }

  //------------------------PostJob-----------------------------------
  async addJob() {
    const newJob = await postJob( this.state.postJobForm )
    this.setState( prevState => (
      {
        gigs: [ ...prevState.gigs, newJob ],
        postJobForm: {
          name: '',
          description: ''
        }
      } ) )
  }

  handleFormChange( e ) {
    const { name, value } = e.target
    this.setState( prevState => ( {
      postJobForm: {
        ...prevState.postJobForm,
        [ name ]: value
      }
    } ) )
  }

  //-----------------------Update/Create Profile/Users ---------------------------------

  async updateUser() {
    const user = await showUserItem( this.state.currentUser.user_id || this.state.currentUser.id )
    this.setState( { currentUser: user } )
  }


  async updateProfile( userItem ) {
    const updatedProfileItem = await putProfile( this.state.profileForm, userItem.id );
    const index = this.state.users.indexOf( userItem );
    const usersArray = this.state.users
    usersArray[ index ] = updatedProfileItem
    this.setState( {
      users: usersArray
    } )
  }



  handleProfileChange( e ) {
    const { name, value } = e.target
    this.setState( prevState => ( {
      profileForm: {
        ...prevState.profileForm,
        [ name ]: value
      }
    } ) )
  }
  //-------------------------Applied Jobs-------------------------------------
  handleListToggle( job ) {
    const selectedJobs = this.state.selectedJobs.slice()

    if ( selectedJobs.some( listJob => listJob.id === job.id ) ) {
      alert( 'You already applied this job' )
    }
    else {
      selectedJobs.push( job )
    }
    this.setState( { selectedJobs } )
  }

  render() {
    console.log( this.state );

    return (
      <div className="App" >
        <div className='navbar'>
          <div className='logoTitle'>GIGAgent</div>
          <div className='functionbar'>
            <Link className='link' to="/artist_infos">TALENTS</Link>&nbsp;
          <Link className='link' to="/gigs">CASTINGS</Link>
            <Link className='link' to="/post_job">POSTJOB</Link>
            <Link className='link' to="/applied_job">APPLICATIONS</Link>
            <Link className='link' to='/my_profile'>PROFILE</Link>
          </div>

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



        <Route exact path="/gigs" render={ () => (
          <ShowGigs
            gigs={ this.state.gigs }
            getGigItem={ this.getGigItem }
          />
        ) } />

        <Route path="/artist_infos" render={ () => (
          <ShowArtists artists={ this.state.artists } />
        ) } />

        <Route path="/gigs/:id" render={ () => (
          <ShowGigItem gigItem={ this.state.gigItem }
            onListToggle={ () => this.handleListToggle( this.state.gigItem ) }
          />
        ) } />

        <Route path="/post_job" render={ () => (
          <PostJob
            gigs={ this.state.gigs }
            handleChange={ this.handleFormChange }
            handleSubmit={ this.addJob }
            postJobForm={ this.state.postJobForm } />
        ) } />

        <Route path='/applied_job' render={ () => (
          <SelectedJobs
            getGigItem={ this.getGigItem }
            jobItem={ this.state.gigItem }
            selectedJobs={ this.state.selectedJobs } />
        ) } />

        <Route path='/my_profile' render={ ( props ) => (
          <ProfilePage
            profileForm={ this.state.profileForm }
            users={ this.state.users }
            updateProfile={ this.updateProfile }
            handleChange={ this.handleProfileChange }
            currentUser={ this.state.currentUser } />
        ) } />
      </div >
    )
  }
}

export default withRouter( App );

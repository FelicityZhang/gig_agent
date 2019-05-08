import React, { Component } from 'react'

export default class ProfilePage extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            isEdit: false
        }
    }
    render() {
        return (
            <div>

                <div>
                    { this.props.currentUser && this.props.currentUser.username }
                    { this.props.currentUser && this.props.currentUser.role }


                    { this.state.isEdit
                        ?

                        <form onSubmit={ ( e ) => {
                            e.preventDefault();
                            this.props.updateProfile( this.props.currentUser );
                            this.setState( { isEdit: false } )
                        } }>

                            description:
                                    <input
                                name="description"
                                type="text"
                                value={ this.props.profileForm.description }
                                onChange={ this.props.handleChange } />
                            role:
                                    <input
                                name="role"
                                type="text"
                                value={ this.props.profileForm.role }
                                onChange={ this.props.handleChange } />
                            price:
                                    <input
                                name="price"
                                type="text"
                                value={ this.props.profileForm.price }
                                onChange={ this.props.handleChange } />
                            photo:
                                    <input
                                name="photo"
                                type="text"
                                value={ this.props.profileForm.photo }
                                onChange={ this.props.handleChange } />
                            <button>Submit</button>
                        </form>

                        :
                        <button onClick={ () => {
                            this.setState( { isEdit: true } )
                        } }>Edit Profile</button>
                    }
                </div>



            </div>
        )
    }
}

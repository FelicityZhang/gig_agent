import React, { Component } from 'react'

export default class ProfilePage extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            isEdit: false,
            isExist: null
        }
    }
    render() {
        return (
            <div>
                { this.props.currentUser &&

                    <React.Fragment >
                        <form
                            onSubmit={ ( e ) => {
                                e.preventDefault();
                                this.props.updateProfile( this.props.currentUser );
                                this.setState( { isEdit: false } )
                            } }>
                            <div className='profilePage'>
                                <div className='profileFromCon'>

                                    <div className='fromItem '>
                                        role:
                                    <input className='input1'
                                            name="role"
                                            type="text"
                                            value={ this.props.profileForm.role }
                                            onChange={ this.props.handleChange } />
                                    </div>
                                    <div className='fromItem'>
                                        price:
                                    <input className='input1'
                                            name="price"
                                            type="text"
                                            value={ this.props.profileForm.price }
                                            onChange={ this.props.handleChange } />
                                    </div>
                                    <div className='fromItem'>
                                        photo:
                                    <input className='input1'
                                            name="photo"
                                            type="text"
                                            value={ this.props.profileForm.photo }
                                            onChange={ this.props.handleChange } />
                                    </div>
                                    <div className='fromItem  margin-left30'>
                                        description:
                                    <input className='input2'
                                            name="description"
                                            type="text"
                                            value={ this.props.profileForm.description }
                                            onChange={ this.props.handleChange } />

                                    </div>
                                    <div><button className='createProfile'>Create</button></div>
                                </div>
                            </div>

                        </form>

                    </React.Fragment>
                }
            </div>
        )
    }
}




// <div className='profileContainer'>
// <div><img src={ this.props.currentUser.photo } /></div>
// <div className='profileInfo'>
//     <div>{ this.props.currentUser.username }</div>
//     <div>{ this.props.currentUser.profileForm.price }</div>
//     <div>{ this.props.currentUser.profileForm.role }</div>
//     <div>{ this.props.currentUser.profileForm.description }</div>
// </div>
// </div>

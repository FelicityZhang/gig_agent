import React, { Component } from 'react'
import { withRouter } from 'react-router'

export class PostJob extends Component {
    constructor ( props ) {
        super( props )

    }

    render() {

        return (
            <div classname='jobPostPage'>

                <form classname='jobPostPage'
                    onSubmit={ ( e ) => {
                        e.preventDefault()
                        this.props.handleSubmit()
                        this.setState( { isAdd: false } )
                    } }>
                    <div className='jobPostContainer'>

                        <div className=''>
                            <span className='margin-right20'>Name:</span>
                            <input className='input1 inputlonger' name="name" type='text' value={ this.props.postJobForm.name } onChange={ this.props.handleChange } />
                        </div>
                        <div className='jobDesCon'>
                            <span className='jobdescription margin-right20'>Description:</span>
                            <textarea className='input2 inputlonger' rows="4" name="description" type='text' value={ this.props.postJobForm.description } onChange={ this.props.handleChange } />
                        </div>
                        <div><button className='jobsubmit'>Submit</button> </div>
                    </div>

                </form>


            </div >
        )
    }
}
export default withRouter( PostJob );

import React, { Component } from 'react'
import { withRouter } from 'react-router'

export class PostJob extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            isAdd: false,
        }
    }

    render() {

        return (
            <div>
                { this.state.isAdd
                    ?
                    <div>
                        <form onSubmit={ ( e ) => {
                            e.preventDefault()
                            this.props.handleSubmit()
                            this.setState( { isAdd: false } )
                        } }>
                            Name: <input name="name" type='text' value={ this.props.postJobForm.name } onChange={ this.props.handleChange } />
                            Description: <input name="description" type='text' value={ this.props.postJobForm.description } onChange={ this.props.handleChange } />
                            <button>Submit</button>
                        </form>
                    </div>
                    :
                    <button onClick={ () => {
                        this.setState( { isAdd: true } )
                    } }>Post a Job</button>
                }

            </div>
        )
    }
}
export default withRouter( PostJob );

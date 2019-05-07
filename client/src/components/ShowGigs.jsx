import React, { Component } from 'react'

export default class ShowGigs extends Component {
    render() {

        return (
            <div>
                { this.props.gigs.map( gig => (
                    <React.Fragment key={ gig.id }>
                        <h3>{ gig.name }</h3>
                        <h5>{ gig.description }</h5>
                        <h7>More Info</h7>
                    </React.Fragment >
                ) ) }
            </div>
        )
    }
}
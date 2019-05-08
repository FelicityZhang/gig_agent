import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class ShowGigs extends Component {
    render() {
        return (
            <div>
                { this.props.gigs.map( gigItem => (
                    <React.Fragment key={ gigItem.id }>
                        <h3>{ gigItem.name }</h3>
                        <h5>{ gigItem.description }</h5>
                        <h7><Link to={ `/gigs/${ gigItem.id }` }
                            onClick={ () => { this.props.getGigItem( gigItem.id ) } }>More Info</Link></h7>
                    </React.Fragment >
                ) ) }
            </div>
        )
    }
}
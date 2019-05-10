import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class ShowGigs extends Component {
    render() {
        return (
            <div className='listGigs'>
                { this.props.gigs.map( gigItem => (
                    <React.Fragment key={ gigItem.id }>
                        <div className='gigItemContainer'>
                            <div class='desContainer'>
                                <div className='gigTitle'> <h3>{ gigItem.name }</h3></div>

                                <div className='font-weight'>Description:</div>
                                <div className='description'>{ gigItem.description }</div>
                            </div>
                            <div className='moreInfo'><h7><Link className='giglink' to={ `/gigs/${ gigItem.id }` }
                                onClick={ () => { this.props.getGigItem( gigItem.id ) } }>Apply Now <span className='jiantou'>-->></span></Link></h7>
                            </div>
                        </div>
                    </React.Fragment >
                ) ) }
            </div>
        )
    }
}
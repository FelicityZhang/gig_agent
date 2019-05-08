import React, { Component } from 'react'

export default class ShowArtists extends Component {
    render() {
        return (
            <div>
                { this.props.artists.map( artist => (
                    <React.Fragment key={ artist.id }>
                        { console.log( 'photooooo:', artist.photo ) }

                        <h3>{ artist.name }</h3>
                        <h5>{ artist.price }</h5>
                        <h5>{ artist.role }</h5>
                        <img src={ artist.photo } alt='' width='80px' height='150px' />
                        <h5>More Info</h5>

                    </React.Fragment >
                ) ) }
            </div>
        )
    }
}
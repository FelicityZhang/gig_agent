import React, { Component } from 'react'

export default class ShowArtists extends Component {
    render() {

        return (
            <div>
                { this.props.artists.map( artist => (
                    <React.Fragment key={ artist.id }>
                        <h3>{ artist.name }</h3>
                        <h5>{ artist.price }</h5>
                        <h5>More Info</h5>

                    </React.Fragment >
                ) ) }
            </div>
        )
    }
}
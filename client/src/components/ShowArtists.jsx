import React, { Component } from 'react'

export default class ShowArtists extends Component {
    render() {
        return (
            <div className='listModel'>
                { this.props.artists.map( artist => (
                    <React.Fragment key={ artist.id }>
                        <div className='modleItem'>
                            <div className="modelContainer">
                                <img className='ModelImg' src={ artist.photo } alt='' max-width='100%' height='350px' />
                            </div>
                            <div><h3>{ artist.name }</h3> </div>
                            <div><h5>{ artist.price }</h5></div>
                            <div><h5>{ artist.role }</h5></div>
                            <div><h5>{ artist.description }</h5></div>

                        </div>
                    </React.Fragment >
                ) ) }
            </div>
        )
    }
}
import React, { Component } from 'react'

export default class ShowArtists extends Component {
    render() {
        return (
            <div className='listModel'>
                { this.props.artists.map( artist => (
                    <React.Fragment key={ artist.id }>
                        <div className='modleItem'>
                            <div className="modelContainer">
                                <div> <img className='ModelImg' src={ artist.photo } alt='' width='350px' height='400px' /></div>
                                <div className="infoContainer">
                                    <div><h3>{ artist.name }</h3> </div>
                                    <div className='priceContainer'>
                                        <div className='price'>{ artist.price }</div>
                                        <div className='price'>{ artist.description }</div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </React.Fragment >
                ) ) }
            </div>
        )
    }
}
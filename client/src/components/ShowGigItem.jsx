import React, { Component } from 'react'



export default class ShowGigItem extends Component {
    constructor ( props ) {
        super( props )
        this.state = {
            isAdd: false
        }
        this.handleClick = this.handleClick.bind( this )

    }

    handleClick( e ) {
        e.stopPropagation()
        console.log( "Handling job click!" )
        this.props.onListToggle()
    }


    render() {
        return (
            <div>
                { this.props.gigItem &&



                    <div className='gigItem'>
                        <div class='desContainer'>
                            <div className='gigTitle margin-30'> <h3>{ this.props.gigItem.name }</h3></div>
                            <div className='gigImgContainer margin-30'><img className='gigImg' src='https://i.imgur.com/dDRCts7.jpg' /></div>
                            <div className='font-weight margin-30'>Description:</div>
                            <div className='description margin-30'>{ this.props.gigItem.description }</div>
                        </div>
                        <button className='apply' onClick={ this.handleClick }>Apply</button>
                    </div>
                }
            </div>
        )
    }
}
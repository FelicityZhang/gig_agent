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
                    <div>
                        <h1>{ this.props.gigItem.name }</h1>
                        <h1>{ this.props.gigItem.description }</h1>
                        <button onClick={ this.handleClick }>Apply</button>
                    </div>
                }
            </div>
        )
    }
}
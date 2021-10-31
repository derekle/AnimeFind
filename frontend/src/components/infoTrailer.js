import React, { Component } from 'react'

export default class InfoTrailer extends Component {
    render() {
        console.log(this.props.data)
        return (
            <section className='videoContainer'>
                <iframe src={this.props.data.trailer_url} className='trailerVideo'/>
            </section>
        )
    }
}
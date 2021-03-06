// infoTrailer - this handles rendering the trailer component on the info page. If there is a trailer available at the endpoint, it will render an iframe for play.

//react
import React, { Component } from 'react'

export default class InfoTrailer extends Component {   
    videoPresent = () => {
        return this.props.data.trailer_url == null
        ? <div>There is no trailer available for this series.</div>
        : <iframe src={this.props.data.trailer_url} title={this.props.data.title_english} className='trailerVideo'/>
    }

    render() {
        console.log(this.props.data)
        return (
            <section className='videoContainer'>
                {this.videoPresent()}
                <p>{this.props.data.background}</p>
            </section>
        )
    }
}
//infoSynopsis - this handles rendering the synopsis information - stateful - keeps track of producers, licensors, and studios data after some minimal processing is done to it.

//react
import React, { Component } from 'react'

export default class InfoSynopsis extends Component {
    constructor(props) {
        super();
        this.state = {
            producers: [],
            licensors: [],
            studios: [],
        };
    }
        
    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setProducers()
            this.setLicensors()
            this.setStudios()
        }
    }

    setStudios = () => {
        const a = this.props.data.studios || this.state.studios
        const studios = a.map((p) =>
            p.name
        )
        this.setState({
            studios: studios
        })
    }

    setLicensors = () => {
        const a = this.props.data.licensors || this.state.licensors
        const licensors = a.map((p) =>
            p.name
        )
        this.setState({
            licensors: licensors
        })
    }

    setProducers = () => {
        const a = this.props.data.producers || this.state.producers
        const producers = a.map((p) =>
            p.name
        )
        this.setState({
            producers: producers
        })
    }

    render() {
        return (
            <div className='synopsisContainer'>
                <p className='synopsis'>{this.props.data.synopsis}</p>
                <table>
                    <tbody>
                        <tr>
                            <th className='synopsis'>Producers</th>
                            <th className='synopsis'>Licensors</th>
                            <th className='synopsis'>Studio</th>
                        </tr>
                        <tr>
                            <td className='synopsis'>{this.state.producers.join(' | ')}</td>
                            <td className='synopsis'>{this.state.licensors.join(' | ')}</td>
                            <td className='synopsis'>{this.state.studios.join(' | ')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
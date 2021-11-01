//react
import React, { Component } from 'react'

//components
//mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default class InfoHeader extends Component {
    constructor(props) {
        super();
        this.state = {
            genres: []
        };
    }

    componentDidUpdate(prevProps) {
        return prevProps !== this.props
            ? this.setGenres()
            : null
    }
    setGenres = () => {
        const a = this.props.data.genres || this.state.genres
        const genres = a.map((g) =>
            g
        )
        this.setState({
            genres: genres
        })
    }

    render() {
        console.log(this.state.genres)
        const array = this.state.genres
        const genres = array.map((data) => 
            <Button size='small' variant='contained' key={data.mal_id}>{data.name}</Button>
        )
        return (
            <div className='infoheaderContent'>

                <div className='infoTypeText'>{this.props.data.type} | {this.props.data.rating}</div>
                <div className='infoHeaderText'>{this.props.data.title_english}</div>
                <div className='infosubHeaderText'>
                    {this.props.data.title_japanese}
                    <Stack spacing={2} direction="row" >{ genres }</Stack>
                </div>
                <hr className='breakLine'/>
            </div>
        )
    }
}
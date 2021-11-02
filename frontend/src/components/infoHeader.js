//infoHeader - handles rendering the header for the info page of a show - stateful - keeps track of the genres received from the api endpoint

//react
import React, { Component } from 'react'

//withRouter - gives us access to this.props.history, which means we can now redirect the user with this component - LondonRob, https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom
import {withRouter} from 'react-router-dom'
import { connect } from "react-redux";

//components
//mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

class InfoHeader extends Component {
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

    handleOnClick = (e) => {
        let id = e.target.id
        this.props.query({ text: ('genre/' + id) })
        this.props.history.push('/Search')
    }

    render() {
        console.log(this.state.genres)
        const array = this.state.genres
        const genres = array.map((data) =>
            <div onClick={this.handleOnClick} key={data.name} >
                <Button  size='small' variant='contained' id={data.mal_id}>{data.name}</Button>
            </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    query: (genre) => dispatch({ type: "SEARCHING_QUERY", query: genre }),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(InfoHeader))
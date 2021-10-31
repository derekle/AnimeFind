import React, { Component } from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import { CardActionArea } from '@mui/material';
import { fetchAnime } from '../actions/animeActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import InfoSynopsis from './infoSynopsis'
import InfoHeader from './infoHeader.js'
import InfoTrailer from './infoTrailer.js'

import { ThemeProvider } from '@mui/material/styles';
import truncateString from '../js/math';


class InfoContainer extends Component {
    constructor(props) {
        super();
        this.state = {
            list: null,
        };
      }

	componentDidMount() {
		console.log('componentDidMount()')
		console.log("AnimeInfo component mounted with these props:")
        console.log(this.props)
        this.props.fetchAnime(this.props.resource, this)
	}

	render() {
		const data = this.state.list || this.props.anime
		console.log(data)
		return (
			<div className='header'>
				<div className='headerContainer'>

					<div className='imageContainer'>
						<img className='image' src={data.image_url} alt={data.mal_id} />
						<h1 className='scoreText'>{data.score}</h1>
					</div>

					<div className='infoContainer'>
						<InfoHeader data={data} />
						<InfoSynopsis data={data} />
					</div>

				</div>
				<hr/>
				<div>
					<InfoTrailer data={data}/>
				</div>
			</div>


        )
	}
}

const mapStateToProps = (state) => {
	return {
		anime: state.anime
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		fetchAnime: (resource, element) => dispatch(fetchAnime(resource, element)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer)
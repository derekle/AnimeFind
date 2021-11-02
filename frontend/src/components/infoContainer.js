//infoContainer - handles how the information containers are rendered on the info page - stateless

//react
import React, { Component } from 'react';
import { connect } from 'react-redux'

//acions
import { fetchAnime } from '../actions/animeActions'

//components
import InfoSynopsis from './infoSynopsis'
import InfoHeader from './infoHeader.js'
import InfoTrailer from './infoTrailer.js'


class InfoContainer extends Component {
	componentDidMount() {
		console.log('componentDidMount()')
		console.log("AnimeInfo component mounted with these props:")
        console.log(this.props)
        this.props.fetchAnime(this.props.resource, this)
	}

	render() {
		const data = this.props.anime
		return (
			<div className='info'>
				<div className='infoHeader'>

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
				<InfoTrailer data={data}/>
			</div>


        )
	}
}

const mapStateToProps = (state) => {
	return {
		anime: state.anime.anime
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAnime: (resource, element) => dispatch(fetchAnime(resource, element)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer)
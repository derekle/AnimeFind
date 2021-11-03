//animeList - this handles rendering a list of returned anime from an api endpoint - stateful - keeps track of the list of anime for each component instance

//react
import React, { Component } from 'react';
import { connect } from 'react-redux'

//actions
import { fetchAnime, clearAnimeData } from '../actions/animeActions'
//components
import AnimeCard from './animeCard'
//mui
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

//css
import '../css/animeList.css'

class AnimeList extends Component {
    constructor(props) {
        super();
        this.state = {
			data: [],
        };
      }
	componentDidMount() {
		console.log('componentDidMount()')
		console.log("AnimeList component mounted with these props:")
		console.log(this.props)
		console.log('fetching ' + this.props.header)
		this.props.clearAnimeData()
		return this.props.query === ""
			? null
			: this.props.fetchAnime(this.props.resource, this, this.props.query)
	}

	componentDidUpdate(prevProps) {
		console.log('componentUpdated')
		console.log(this.props)
		console.log(prevProps)
		return prevProps.query !== this.props.query
			? this.props.fetchAnime(this.props.resource, this, this.props.query)
			: null
	}

	loading = () => {
		if (this.props.loading) {
			console.log('loading:', this.props.loading)
			return (
				<Box sx={{ width: '100%', height: '50px' }}>
					<LinearProgress />
				</Box>
			)
		} else if (this.state.data.error) {
				return (
					<div className='errorMessage'>
						<Alert severity="error"  className='alert'>
							<AlertTitle>{this.state.data.status} Error: {this.state.data.error}</AlertTitle>
							{this.state.data.exception}
						</Alert>
					</div>
				)
			} else {
					const array = this.state.data
					const images = array.map((data, key) =>
						<div key={key} className='card'>
							<AnimeCard data={data} />
						</div>
					)
					return images
			}
		}

	render() {
		console.log('rendering ' + this.props.header + ' AnimeList component...')
		return (
			<div className='animeList'>
				<h2 className='listHeader'>{this.props.header}</h2>
				<div className='results'>
					<div className={'scrollingWrapper-'+this.props.scroll}>
					<ThemeProvider theme={this.props.theme}>
						{this.loading()}
					</ThemeProvider>
					</div>
				</div>
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.anime.loading
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchAnime: (resource, element, query) => dispatch(fetchAnime(resource, element, query)),
		clearAnimeData: () => dispatch(clearAnimeData())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimeList)
//animeCard - this handles rendering the cards for animeList to display - stateless

//react
import React, { Component } from 'react';
import Card from '@mui/material/Card';
import { Link } from 'react-router-dom'

//components
//mui
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

//functions
import truncateString from '../js/math';

//css
import '../css/animeList.css'

export default class AnimeCard extends Component {
	render() {
		return (
			<Card sx={{ maxWidth: 250, maxHeight: 600 }}>
				<CardActionArea
					component={Link}
					to={'/anime/info/' + this.props.data.mal_id + '/' + this.props.data.title}
				>
					<CardMedia
						component='img'
						alt={this.props.data.mal_id}
						height='400'
						image={this.props.data.image_url}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{truncateString(this.props.data.title, 13)}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		)
	}
}
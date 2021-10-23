import '../css/usersList.css'
import { CSSTransitionGroup } from 'react-transition-group' // ES6


import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { CardActionArea } from '@mui/material';

import Grow from '@mui/material/Grow';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import truncateString from '../js/math';
export default class UserList extends Component {

	render() {
		console.log(this.props.userNames);
		const images = this.props.userNames.map((data) =>

			<div key={data.id} class='card'>

				<Card sx={{ maxWidth: 250, maxHeight: 600 }}>
					      <CardActionArea>

				<CardMedia
					component='img'
					alt={data.title}
					height='400'
					image={data.image_url}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{truncateString(data.title, 10)}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{truncateString(data.synopsis, 50)}
					</Typography>
				</CardContent>
				</CardActionArea>
				</Card>
				</div>

		)

		return (
			<div className='results'>
				<ThemeProvider theme={this.props.theme}>
					
						<Grid
							container
							direction="row"
							justifyContent="space-evenly"
							alignItems="baseline"
					>
							{images}
						</Grid>
				</ThemeProvider>
			</div>
		)
	}
}

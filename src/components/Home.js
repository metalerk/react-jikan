import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

import { Link } from "react-router-dom";

import Detail from './Detail.js';

import './Home.css';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const HomeLayout = (props) => {
	const { classes } = props;
	return (
	<div className={classes.root}>
      	<Grid container spacing={12}>
      		{ props.animes.map( function (anime) { 
      			return (
      				
      				<Tooltip title={anime.title}>
      					<Grid item xs={2} className="fill" key={anime.mal_id}>
      							<Link to={{pathname: "/detail", anime }} ><img src={anime.image_url} /></Link>
      					</Grid>
      				</Tooltip>
      			)
      		})}
       	</Grid>
    </div>
    )
}

HomeLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeLayout);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { Link } from "react-router-dom";

import './Detail.css';

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

class Detail extends React.Component {

	constructor(props){
		super(props);
		console.log(this.props.location.anime)
		this.state = { anime: { genres: []} }
	}

	componentDidMount() {
		if ('anime' in this.props.location){
			this.setState({ anime: this.props.location.anime })
		}
	}

  	render() {
  	  console.log(this.state.anime.genres)
	  const { classes } = this.props;

	  return (
	    <div className={classes.root}>
	    <Grid item xs={3} spacing={2}>
	          <Link to={{pathname: "/"}}><svg className="back-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/></svg></Link>
	    </Grid>
	      <Grid container spacing={24}>
	        <Grid item xs={12}>
	          <Typography variant="h2">
	          	{this.state.anime.title}
	          </Typography>
	        </Grid>
	        <Grid item xs={3} spacing={2}>
	          <img src={this.state.anime.image_url} />
	        </Grid>
	        <Grid item xs={3}>
	          <Paper className={classes.paper}>{`Episodes: ${this.state.anime.episodes}`}</Paper>
	        </Grid>
	        <Grid item xs={2}>
	          <Paper className={classes.paper}>{`Type: ${this.state.anime.type}`}</Paper>
	        </Grid>
	        <Grid item xs={3}>
	          <Paper className={classes.paper}>{`Started: ${this.state.anime.airing_start}`}</Paper>
	        </Grid>
	        {this.state.anime.genres.map(function(genre) {
	        	return <Grid item xs={2}>
	          		<Paper className={classes.paper}>{genre.name}</Paper>
	        	</Grid>
	        })}
	        <Grid item xs={12}>
	          <Paper className={classes.paper}>{this.state.anime.synopsis}</Paper>
	        </Grid>
	      </Grid>
	    </div>
	  );
	}
}

Detail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Detail);
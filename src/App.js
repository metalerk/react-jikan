import React, { Component } from 'react';

import HomeLayout from './components/Home.js';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Detail from './components/Detail.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      animes: [] }
  }

  getWeekDay(){
    let d = new Date();
    return d.toLocaleString('en-us', {weekday: 'long'}).toLowerCase()
  }

  componentDidMount() {
    fetch(`https://api.jikan.moe/v3/schedule/${this.getWeekDay()}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        items: data[`${this.getWeekDay()}`].length,
        animes: data[`${this.getWeekDay()}`],
      })
      this.render()
    })
  }

  render() {
    return (
      <HomeLayout animes={this.state.animes} />
    );
  }
}

export default App;

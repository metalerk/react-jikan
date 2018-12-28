import React, { Component } from 'react';

import HomeLayout from './components/Home.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      className: '',
      isDraggable: false,
      isResizable: false,
      items: 10,
      cols: 12,
      rowHeight: 30,
      onLayoutChange: function () {},
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
    })
  }

  render() {
    return (
      <HomeLayout {...this.state} />
    );
  }
}

export default App;

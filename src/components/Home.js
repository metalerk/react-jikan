import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";

import './Home.css';

const ReactGridLayout = WidthProvider(RGL);

class HomeLayout extends React.Component {
  constructor(props) {
    super(props);
    // this.onLayoutChange = this.onLayoutChange.bind(this)

    const layout = this.generateLayout();
    this.state = { layout };
  }

  generateDOM() {
    console.log(this.props.animes.length)
    return this.props.animes.map(x => 
      <div key={x.mal_id}>
        <img src={x.image_url} />
      </div>);
  }

  generateLayout() {
    const p = this.props;
    return _.map(new Array(p.animes.length), function(item, i) {
      var y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
      return {
        x: (i * 2) % 12,
        y: Math.floor(i / 6) * y,
        w: 2,
        h: y,
        i: i.toString()
      };
    });
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

export default HomeLayout;
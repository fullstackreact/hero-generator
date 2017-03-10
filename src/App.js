import React, { Component } from 'react';
import './App.css';

import waterHero from '../public/assets/images/that-water-tho.jpg';
import plantHero from '../public/assets/images/them-plants.jpg';
import mtnHero from '../public/assets/images/those-mtns.jpg';

const IMAGES = [
  {
    title: '💦 ',
    url: waterHero,
  },
  {
    title: '🌱',
    url: plantHero,
  },
  {
    title: '🏔',
    url: mtnHero,
  },
];

import HiddenImages from './HiddenImages';

class App extends Component {
  state = {
    imageIdx: 0,
    header: 'Love water again.',
  };
  handleSubmit = ({ imageIdx, header }) => {
    this.setState({
      imageIdx: imageIdx,
      header,
    });
  };
  handleHeaderChange = e => {
    this.setState({
      header: e.target.value,
    });
  };
  handleImageButtonClick = idx => {
    this.setState({
      imageIdx: idx,
    });
  };
  render() {
    const imageUrl = IMAGES[this.state.imageIdx].url;
    const heroImageStyle = {
      backgroundImage: `url('${imageUrl}')`,
    };
    const imageButtons = IMAGES.map((i, idx) => {
      const klass = `ui ${idx === this.state.imageIdx ? 'active' : null} button`
      return (
        <div
          className={klass}
          key={idx}
          onClick={() => this.handleImageButtonClick(idx)}
          >
          {i.title}
        </div>
      );
    });
    return (
      <div className="ui middle aligned grid">
        <div className="row">
          <div className="hero-image" style={heroImageStyle}>
            <div className="eight wide column">
              <h2 id="hero-title" className="ui center aligned header">
                {this.state.header}
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="five wide column" />
          <div className="six wide column">
            <div className="ui segment">
              <form className="ui form">
                <div className="field">
                  <label>Header</label>
                  <input
                    type="text"
                    name="header"
                    value={this.state.header}
                    onChange={this.handleHeaderChange}
                  />
                </div>
                <div className="field">
                  <label>Image</label>
                  <div className="ui three basic buttons">
                    {imageButtons}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <HiddenImages srcs={IMAGES.map(i => i.url)} />
          <div className="five wide column" />
        </div>
      </div>
    );
  }
}

export default App;

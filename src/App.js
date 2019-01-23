import React, { Component } from 'react';
import './App.scss';
import { Parallax } from 'react-parallax';
import { quotes, defaultAttribution, imageFetcher, sleep } from './data/quotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.shuffle(this.getLocalImages()),
      quotes: this.shuffle(quotes)
    };
  }
  shuffle = images => {
    // stolen from https://gomakethings.com/how-to-shuffle-an-array-with-vanilla-js/
    let currentIndex = images.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = images[currentIndex];
      images[currentIndex] = images[randomIndex];
      images[randomIndex] = temporaryValue;
    }

    return images;
  };
  getLocalImages = () => {
    return JSON.parse(localStorage.getItem('bg-images')) || [];
  };
  setLocalImage = url => {
    localStorage.setItem(
      'bg-images',
      JSON.stringify([...this.getLocalImages(), url])
    );
  };
  fetchImage = () => {
    imageFetcher().then(async url => {
      if (!this.state.images.includes(url)) {
        this.setState({ images: [...this.state.images, url] });
        this.setLocalImage(url);
      }
      if (this.state.images.length !== quotes.length) {
        await sleep(500);
        this.fetchImage();
      }
    });
  };

  componentDidMount() {
    if (this.state.images.length !== quotes.length) {
      this.fetchImage();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <div className="header">Things Jesus Probably Said</div>
          <div className="main">
            <div>
              {this.state.quotes.map((quote, index) => (
                <div key={index}>
                  <Parallax
                    className={'parallax'}
                    bgImage={this.state.images[index] || ''}
                    strength={500}
                  >
                    <div className={'quote-container'}>
                      <p className={'callout'}>
                        "{quote.text}"
                        <br />
                        <span className={'attribution'}>
                          – {quote.attribution || defaultAttribution}
                        </span>
                      </p>
                    </div>
                  </Parallax>
                  <p />
                </div>
              ))}
            </div>
          </div>
          <div className="footer">&nbsp;</div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.scss';
import { Parallax } from 'react-parallax';
import { quotes, defaultAttribution, imageFetcher, sleep } from './data/quotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }
  fetchImage = () => {
    imageFetcher().then(async url => {
      if (!this.state.images.includes(url)) {
        this.setState({ images: [...this.state.images, url] });
      }
      if (this.state.images.length !== quotes.length) {
        await sleep(500);
        this.fetchImage();
      }
    });
  };

  componentDidMount() {
    this.fetchImage();
  }

  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <div className="header">Things Jesus Probably Said</div>
          <div className="main">
            <div>
              {quotes.map((quote, index) => (
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

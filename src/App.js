import React, { Component } from 'react';
import './App.scss';
import { Parallax } from 'react-parallax';
import { quotes, defaultAttribution } from './data/quotes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid-container">
          <div className="header">Probably Jesus</div>
          <div className="main">
            <div>
              {quotes.map((quote,index) => (
                <div key={index}>
                  <Parallax bgImage={quote.image} strength={500}>
                    <div className={'quote-container'}>
                      <p className={'callout'}>
                        "{quote.text}"
                        <br />
                        <span className={'attribution'}>– {quote.attribution || defaultAttribution}</span>
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

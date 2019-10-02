import React from 'react';
import './App.css';

import logo from './assets/logo.png';
import {Card} from './components/card/card';
import {Menu} from './components/menu/menu';
import {Chart} from './icons';

const CARD_DATA = [
    {
        id: 1,
        title: 'To the Moon',
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    },
    {
        id: 2,
        title: 'End of Ethereum',
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    },
    {
        id: 3,
        title: 'To the Moon',
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    },
    {
        id: 4,
        title: 'End of Ethereum',
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    },
    {
        id: 5,
        title: 'To the Moon',
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    },
    {
        id: 6,
        title: 'End of Ethereum',
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    },
    {
        id: 7,
        title: 'To the Moon',
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    },
    {
        id: 8,
        title: 'End of Ethereum',
        description: 'Hey traders, I was paying close attention to ETHUSD for a while as it started approaching a significant level of resistance. Finally on a daily RSI shows us clear divergence and very nice dodji.'
    }
]

const MENU_DATA = [
    {
        id: 1,
        name: 'Ideas'
    },
    {
        id: 2,
        name: 'Markets'
    },
    {
        id: 3,
        name: 'Scripts'
    },
    {
        id: 4,
        name: 'Screener'
    },
    {
        id: 5,
        name: 'Shows'
    },
    {
        id: 6,
        name: 'Chart',
        icons: <Chart/>
    },
    {
        id: 7,
        name: 'More'
    }
]

const App: React.FC = () => {
  return (
      <div>
          <header>
              <div className='header-top'>
                  <div className="layout">
                      <div className="header-grids">
                          <div className="logo">
                              <img src={logo} alt="TW"/>
                          </div>
                          <div className="search-input-block">
                              <input type="text" placeholder="Search"/>
                          </div>
                          <div className="button">
                              <a href="#" className="link">
                                  Sign in
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='header-bottom'>
                  <div className="layout">
                      <Menu items={MENU_DATA} />
                  </div>
              </div>
          </header>
          <section className='body'>
              <div className="layout">
                  <h1 className="heading">
                      Trading ideas
                  </h1>
                  <div className="grids-3-colums">
                      {
                          CARD_DATA.map(item => <Card key={item.id} title={item.title} description={item.description}/>)
                      }
                  </div>
              </div>
          </section>
      </div>
  );
}

export default App;

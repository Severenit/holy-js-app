import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
      <div>
          <header>
              <div className='header-top'>

              </div>
              <div className='header-bottom'>
                  <div className="layout">
                      <ul className="menu">
                          <li>
                              <a href="#">
                                  Ideas
                              </a>
                          </li>
                          <li>
                              <a href="#">
                                  Markets
                              </a>
                          </li>
                          <li>
                              <a href="#">
                                  Scripts
                              </a>
                          </li>
                          <li>
                              <a href="#">
                                  Screener
                              </a>
                          </li>
                          <li>
                              <a href="#">
                                  Shows
                              </a>
                          </li>
                          <li>
                              <a href="#">
                                  Chart
                              </a>
                          </li>
                          <li>
                              <a href="#">
                                  More
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </header>
          <section className='body'>
              <div className="layout">
                  <h1 className="heading">
                      Trading ideas
                  </h1>
                  <div className="grids-3-colums">
                      <div className="card">
                          <div className="grids-card">
                              <h2 className="heading_m">
                                  To the Moon
                              </h2>
                          </div>
                      </div>
                      <div className="card">
                          <div className="grids-card">
                              <h2 className="heading_m">
                                  End of Ethereum
                              </h2>
                          </div>
                      </div>
                      <div className="card">
                          <div className="grids-card">
                              <h2 className="heading_m">
                                  To the Moon
                              </h2>
                          </div>
                      </div>
                      <div className="card">
                          <div className="grids-card">
                              <h2 className="heading_m">
                                  End of Ethereum
                              </h2>
                          </div>
                      </div>
                      <div className="card">
                          <div className="grids-card">
                              <h2 className="heading_m">
                                  To the Moon
                              </h2>
                          </div>
                      </div>
                      <div className="card">
                          <div className="grids-card">
                              <h2 className="heading_m">
                                  End of Ethereum
                              </h2>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
}

export default App;

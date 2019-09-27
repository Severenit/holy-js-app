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
      </div>
  );
}

export default App;

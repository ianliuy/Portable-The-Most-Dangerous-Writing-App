import React, { Component } from 'react';

export default class Footer extends Component { 

  render() {
    return (
      <footer className="main-footer">
      <div className="container">
      <div className="row">
          <div className="col-sm-6">
            <div className="footer-content">
              <a className="navbar-brand Logo__Main" href="https://www.squibler.io">Squibler</a>
                <p>
                  Squibler is the world's best writing platform. Write anything. Publish anywhere.
                </p>
                <div className="social-icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/squibler_" title="Follow us on Twitter"><i className="fab fa-twitter fa-2x"></i></a>
                </div>
              </div>
          </div>
          <div className="col-md-3 resources">
              <div className="list-header">Resources</div>
              <ul className="list-group text-white">
                  <li className="list-group-item">
                      <a target="_self" rel="noopener noreferrer" href="/blog/how-to-write-book/">
                          How to Write a Book
                      </a>
                  </li>
                  <li className="list-group-item">
                      <a target="_self" rel="noopener noreferrer" href="/blog/how-to-write-novel/">
                          How to Write a Novel
                      </a>
                  </li>
                  <li className="list-group-item">
                      <a target="_self" rel="noopener noreferrer" href="/blog/write-a-script-screenplay/">
                          How to Write a Screenplay
                      </a>
                  </li>
                  <li className="list-group-item">
                      <a target="_self" rel="noopener noreferrer" href="/blog/how-to-write-short-story/">
                          How to Write a Short Story
                      </a>
                  </li>
                  <li className="list-group-item">
                      <a target="_self" rel="noopener noreferrer" href="/blog/book-writing-templates/">
                          Book Writing Templates
                      </a>
                  </li>
                  <li className="list-group-item">
                      <a target="_self" rel="noopener noreferrer" href="/blog/book-writing-templates/">
                          Novel Outline Templates
                      </a>
                  </li>
              </ul>
          </div>
          <div className="col-md-3 tools">
              <div className="list-header">Tools</div>
              <ul className="list-group">
                  <li className="list-group-item">
                      <a target="_self" rel="noopener noreferrer" href="/book-writing-software">
                          Book Writing
                      </a>
                  </li>
                  <li className="list-group-item">
                      <a target="_self" rel="noopener noreferrer" href="/screenwriting-software">
                          Screenwriting
                      </a>
                  </li>
                  <li className="list-group-item">
                      <a target="_self" rel="noopener noreferrer" href="/online-journal">
                          Online Journal
                      </a>
                  </li>
                  <li className="list-group-item">
                      <a target="_self" rel="noopener noreferrer" href="/dangerous-writing-prompt-app">
                        Dangerous Prompts
                      </a>
                  </li>
                  <li className="list-group-item">
                      <a target="_self" rel="noopener noreferrer" href="/plot-generator">
                          Plot Generator
                      </a>
                  </li>
              </ul>
          </div>
      </div>
      <div className="row">
          <div className="col-sm-6 d-flex justify-content-around">
              <div>© Copyright 2019 Squibler, All Rights Reserved.</div>
              <div>-</div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.iubenda.com/privacy-policy/69329368/cookie-policy" title="Legal" >Cookie Policy</a>
              <div>-</div>
              <a target="_blank" rel="noopener noreferrer" href="https://www.iubenda.com/privacy-policy/69329368" title="Privacy" >Privacy Policy</a>
              <div>-</div>
              <a target="_self" rel="noopener noreferrer" href="/terms-of-service" title="Security">Terms of Service</a>
          </div>
          <div className="col-sm-2"></div>
          <div className="col-sm-2"></div>
      </div>
  </div>
  </footer>
    )
  }
}

import logo from '../logo.svg';
import React, { Component } from 'react';
import { SearchBox } from "./SearchBox";

export class Header extends Component {
  render() {
    return(
      <header className="App-header">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="app-name">
          <p>React Notes</p>
        </div>
        <SearchBox/>
      </header>
    )
  }
}
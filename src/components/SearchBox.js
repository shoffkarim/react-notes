import React, { Component } from 'react';

export class SearchBox extends Component {
  render() {
    return(
      <div className="notes-search">
        <input type="text" placeholder="Поиск заметки"/>
      </div>
    )
  }
}
import React, { Component } from 'react';

export class NotesList extends Component {
  render() {
    return(
      <ul className="notes-list">
        <li className="notes-item">
          <p className="notes-item__name">Работа</p>
          <span className="notes-item__date">30.01.2021</span>
          <span className="notes-item__tag">#work</span>
        </li>
        <li className="notes-item">
          <p className="notes-item__name">Работа</p>
          <span className="notes-item__date">30.01.2021</span>
          <span className="notes-item__tag">#work</span>
        </li>
        <li className="notes-item">
          <p className="notes-item__name">Работа</p>
          <span className="notes-item__date">30.01.2021</span>
          <span className="notes-item__tag">#work</span>
        </li>
        <li className="notes-item">
          <p className="notes-item__name">Работа</p>
          <span className="notes-item__date">30.01.2021</span>
          <span className="notes-item__tag">#work</span>
        </li>
      </ul>
    )
  }
}
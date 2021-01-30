import React, { Component } from 'react';
import { NotesListData } from "../data";
export class NotesList extends Component {
  render() {
    return(
      <ul className="notes-list">
        {NotesListData.map((items) =>
            <li className="notes-item " id={items.id}>
              <p className="notes-item__name">{items.name}</p>
              <span className="notes-item__date">{items.date}</span>
              <span className="notes-item__tag">{items.tag}</span>
          </li>

        )}
      </ul>
    )
  }
}
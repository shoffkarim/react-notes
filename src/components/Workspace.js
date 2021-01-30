import React, { Component } from 'react';

export class Workspace extends Component {
  render() {
    return(
      <section className="workspace">
        <div className="workspace-date">
          <p>30 января 2021г., 12:13</p>
        </div>
        <textarea className="workspace-field"></textarea>
      </section>
    )
  }
}
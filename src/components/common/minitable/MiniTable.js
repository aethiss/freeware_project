import React, { Component } from 'react'

class MiniTable extends Component {
  render() {
    return (
      <a href="">
        <div className="pane-row games">
          <span className="pane-count">
            <img src="/static/img/logo.svg" width="8" height="8" alt="" />
            69
          </span>
          <span className="pane-topic">Whatever</span>
        </div>
      </a>
    )
  }
}

export default MiniTable

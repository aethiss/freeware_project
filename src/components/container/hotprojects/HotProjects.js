import React, { Component } from 'react'

// components
import MiniTable from '../../common/minitable/MiniTable'

const fakeMiniTables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

class HotProjects extends Component {
  render() {
    return (
      <div className="pane">
        <div className="pane-title">
          Hot Projects
          <img
            src="/static/img/placeholderfordropdown.gif"
            width="12"
            height="12"
            alt=""
          />
        </div>
        {fakeMiniTables.map((val, ind) => (
          <MiniTable key={ind} />
        ))}
      </div>
    )
  }
}

export default HotProjects

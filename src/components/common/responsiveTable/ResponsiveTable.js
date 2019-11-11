import React, { Component } from 'react'
import PropTypes from 'prop-types'

const innerStyleRight = {
  marginLeft: 'auto',
  marginRight: '0',
  display: 'block',
}

const innerStyleDefault = {
  display: 'block',
}

class ResponsiveTable extends Component {
  static propTypes = {
    color: PropTypes.string,
    align: PropTypes.string,
    title: PropTypes.string,
    user: PropTypes.object,
    onAdd: PropTypes.func,
  }
  static defaultProps = {
    color: 'blue',
    align: 'left',
    title: 'Skills',
  }

  render() {
    const { color, align, title, onAdd } = this.props
    return (
      <div
        className="col-lg-8"
        style={
          align === 'left' ? { ...innerStyleDefault } : { ...innerStyleRight }
        }
      >
        <div className="table-responsive responsive-utilities">
          <table
            className={`table table-striped table-hover w-auto mytable blue`}
          >
            <thead className={`${color}`}>
              <tr>
                <th scope="col">
                  <img
                    className="opaque"
                    src="/static/img/plus.jpg"
                    width="20"
                    height="20"
                    onClick={() => {
                      onAdd()
                    }}
                  />
                </th>
                <th scope="col">{title}</th>
                <th scope="col">
                  <img
                    src="/static/img/smile.svg"
                    width="15"
                    height="15"
                    className="d-inline-block align-left"
                    alt=""
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="justify-content-center align-self-center">
                  <img
                    src="/static/img/pen.svg"
                    width="15"
                    height="15"
                    className="d-inline-block align-center"
                    alt=""
                  />
                </td>
                <td>Genetics</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ResponsiveTable

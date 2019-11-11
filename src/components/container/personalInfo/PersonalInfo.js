import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { omit } from 'ramda'

const iconsImages = [
  'mail.svg',
  'nick.svg',
  'nick.svg',
  'domos.svg',
  'domos.svg',
  'domos.svg',
  'phone.svg',
  'web.svg',
  'web.svg',
]

export default class PersonalInfo extends Component {
  static propTypes = {
    color: PropTypes.string,
    user: PropTypes.object,
  }
  static defaultProps = {
    color: 'blue',
  }

  userValue = (val, key) => {
    return (
      <tr key={key}>
        <td className="justify-content-center align-self-center">
          <img
            src={`/static/img/${iconsImages[key]}`}
            width="15"
            height="15"
            className="d-inline-block align-center"
            alt=""
          />
        </td>
        <td>{val}</td>
        <td>
          <img
            src="/static/img/eye_no.svg"
            width="15"
            height="15"
            className="d-inline-block align-center"
            alt=""
          />
        </td>
      </tr>
    )
  }
  ''
  render() {
    const { user } = this.props
    const currentUser = Object.keys(omit(['isLogin', 'skill', 'token'], user))
    // console.log(currentUser)
    return (
      <div className="table-responsive responsive-utilities">
        <table className="table table-striped table-hover w-auto mytable red ">
          <tbody>
            {currentUser.map((val, key) => {
              // console.log('user map', user[val], val)
              return this.userValue(user[val], key)
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

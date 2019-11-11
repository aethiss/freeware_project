import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Link from 'next/link'
import Router from 'next/router'

// helpers
import Swal from 'sweetalert2'

// Actions
import { loginUser } from '../../../redux/actions/user'
import { setCookie } from '../../../libs/cookieHelper'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  onLogin = () => {
    const { dispatch } = this.props
    const { email, password } = this.state
    // console.log('onLogin', this.props, this.state)
    dispatch(loginUser(email, password))
      .then(res => {
        console.log('user login success', res)
        setCookie('token', res[0].token, 60)
        Router.push({
          pathname: '/projects',
        })
      })
      .catch(err => {
        console.log('user login error', err)
        Swal.fire('Error...', err.msg, 'error')
      })
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.onLogin}>
          <p>
            <label htmlFor="firstName">
              Email
              <input
                type="text"
                onChange={e => {
                  this.setState({ email: e.target.value })
                }}
              />
            </label>
          </p>
          <p>
            <label htmlFor="lastName">
              password
              <input
                type="text"
                onChange={e => {
                  this.setState({ password: e.target.value })
                }}
              />
            </label>
          </p>
          <input type="submit" value="Submit" />
        </form>
        <div>
          <hr />
          <Link href="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Login

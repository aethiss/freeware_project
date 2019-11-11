import React, { Component } from 'react'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import Head from 'next/head'
import Router from 'next/router'

// Libs
import { getCookie, setCookie } from '../src/libs/cookieHelper'

// Components
import Header from '../src/components/common/header/Header'
import Register from '../src/components/container/register/Register'

// Actions
import { autoLogin, saveNewUser } from '../src/redux/actions/user'

class Registration extends Component {
  static async getInitialProps({ reduxStore, req }) {
    const isServer = !!req
    if (isServer) {
      const token = getCookie('token', req.headers.cookie)
      if (token) {
        await reduxStore.dispatch(autoLogin(token))
        return {
          ...reduxStore,
          currentState: reduxStore.getState(),
        }
      }
    }
    return {
      ...reduxStore,
      currentState: reduxStore.getState(),
    }
  }

  registerNewUser = user => {
    const { dispatch } = this.props
    dispatch(saveNewUser(user))
      .then(res => {
        console.log('new user registered', res)
        // save the token
        setCookie('token', res.token, 60)
        // redirect to the account page
        Router.push({
          pathname: '/projects',
        })
      })
      .catch(err => {
        const message =
          err.msg === 'ER_DUP_ENTRY' ? 'Email Already Registered' : err.msg
        Swal.fire('Oops...', message, 'error')
        console.log('error on user register', err)
      })
  }

  render() {
    const { currentState, dispatch } = this.props
    return (
      <div className="bodyContainer">
        <Head>
          <title>Freeware delle idee</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/custom.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/css/layout.css"
          />
        </Head>
        <div className="wrapper">
          <div className="row">
            <div className="column">
              <Header user={currentState.user} dispatch={dispatch} />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <div className="container">
                <div className="row justify-content-center align-self-center ">
                  <div className="col-lg-12">
                    <h1>Register and Start your new adventure.</h1>
                    <div style={{ minHeight: '800px' }}>
                      <div className="row">
                        <div className="column">
                          <Register onSubmit={this.registerNewUser} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Registration)

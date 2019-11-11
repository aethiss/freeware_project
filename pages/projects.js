import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'

// Libs
import { getCookie } from '../src/libs/cookieHelper'

// Components
import Header from '../src/components/common/header/Header'
import Account from '../src/components/container/account/Account'

// actions
import { autoLogin } from '../src/redux/actions/user'

class Index extends Component {
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
              <Account />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Index)

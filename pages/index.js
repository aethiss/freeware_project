import React, { Component } from 'react'
import { connect } from 'react-redux'
import Head from 'next/head'

// Components
import Header from '../src/components/common/header/Header'
import Trendings from '../src/components/container/trendings/Trendings'
import HotProjects from '../src/components/container/hotprojects/HotProjects'

// libs
import { getCookie } from '../src/libs/cookieHelper'

// Actions
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
              <div className="container">
                <div className="row justify-content-center align-self-center ">
                  <div className="col-lg-12">
                    <h1>Find your new adventure.</h1>
                    <div style={{ minHeight: '800px' }}>
                      <div className="row">
                        <div className="column">
                          <Trendings />
                        </div>
                        <div className="column">
                          <HotProjects />
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

export default connect()(Index)

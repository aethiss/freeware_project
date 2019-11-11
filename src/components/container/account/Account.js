import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// alert and dialogs
import Swal from 'sweetalert2'

// Components
import ResponsiveTable from '../../common/responsiveTable/ResponsiveTable'
import PersonalInfo from '../personalInfo/PersonalInfo'
import NoLogin from '../../common/noLogin/NoLogin'

import { addNewSkill } from '../../../redux/actions/skills'

@connect(
  state => ({
    user: state.user,
  }),
  { addNewSkill }
)
export default class Account extends Component {
  constructor() {
    super()
    this.state = {
      showDialog: false,
    }
  }

  static propTypes = {
    user: PropTypes.object,
    addNewSkill: PropTypes.func,
  }
  static defaultProps = {
    color: 'blue',
  }

  addNewSkill = () => {
    if (!this.props.user.token) {
      Swal.fire('Oops...', 'Please login again', 'error')
    } else {
      Swal.fire({
        title: 'Add New Personal skill',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
        },
        showCancelButton: true,
        confirmButtonText: 'Add Skill',
        preConfirm: skill => {
          console.log(skill)
          this.props.addNewSkill(skill, this.props.user.token)
        },
      })
    }
  }

  render() {
    const { user } = this.props
    if (!user.isLogin) return <NoLogin />
    return (
      <div className="row" style={{ marginLeft: 0 }}>
        <div className="column">
          <ResponsiveTable onAdd={this.addNewSkill} title="My Skills" />
        </div>
        <div className="column">
          <PersonalInfo user={user} />
        </div>
        <div className="column">
          <ResponsiveTable
            align="right"
            color="green"
            title="My Projects"
            onAdd={() => {
              console.log('TODO')
            }}
          />
        </div>
      </div>
    )
  }
}

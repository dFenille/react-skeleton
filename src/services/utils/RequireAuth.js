import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { withCookies } from 'react-cookie'

export default function(ComposedComponent) {
  class Authentication extends Component {
    

    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      let {cookies} = this.props
      if (!cookies.get('a')) {
        this.context.router.history.push("/")
      }
    }

    componentWillUpdate(nextProps) {
      let {cookies} = nextProps
      if (!cookies.get('a')) {
        this.context.router.history.push("/")
      }
    }

    render() {
      let {cookies} = this.props
      if (cookies.get('a')) {
        return <ComposedComponent {...this.props} />
      }
      return null
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth }
  }

  return withCookies(connect(mapStateToProps)(Authentication))
}
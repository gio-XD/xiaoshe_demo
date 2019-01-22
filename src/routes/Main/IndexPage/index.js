import React, { Component,Fragment } from 'react'
import Sider from './SiderBar'

export default class IndexPage extends Component {
  render() {

    return (
      <Fragment>
        <Sider {...this.props}/>
        {this.props.match.params.year}
      </Fragment>
    )
  }
}

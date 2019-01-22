import React, { Component,Fragment } from 'react'
import Sider from './SiderBar'
import Content from './Content'

export default class IndexPage extends Component {
  render() {

    return (
      <Fragment>
        <Sider {...this.props}/>
        <Content/>
      </Fragment>
    )
  }
}

import React, { Component, Fragment } from 'react'
import SiderBar from './SiderBar'
import Content from './Content'


export default class Index extends Component {
  componentWillMount(){
    
  }
  render() {
    return (
      <Fragment>
          <SiderBar/>
          <Content/>
      </Fragment>
    )
  }
}

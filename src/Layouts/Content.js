import React, { Component, Fragment } from 'react'
import {withRouter} from 'dva/router'

import styles from './Content.css'

@withRouter
export default (Wrapped) => {
  class Container extends Component {

    renderHeader(){
      return (
        <div className={styles.header}>
            {this.handleMatchHeader()}
        </div>
      )
    }

    handleMatchHeader(){
      const {pathname} = this.props.location
      if(pathname.split('/')[1] === 'index')
      return this.renderAnounce()
    }

    renderAnounce() {
      return (
        <Fragment>
          <h4>公告</h4>
          <div style={{ fontSize: '14px' }}>各位老师，杨浦区教育局校舍修缮基本项目条款已更新，请查看详情</div>
        </Fragment>
      )
    }

    render() {
      return (
        <div className={styles.content}>
            {this.renderHeader()}
          <div className={styles.contentBody}>
            <Wrapped {...this.props} />
          </div>
        </div>
      )
    }
  }

  return Container
}

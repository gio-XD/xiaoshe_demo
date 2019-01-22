import React, { Component } from 'react'
import globalStyles from '../style.css'
import { Row, Col } from 'antd';
import Logo from '../../components/Logo'
import { Link } from 'dva/router'
import { connect } from 'dva'
import siderData from '../../configs/indexSider'
// import addLogo from '../../Layouts/SiderBar'
import styles from './style.css'


@connect(({ data }) => ({
  data: data.siderBar
}))
export default class SiderBar extends Component {

  componentWillMount() {
    let postData = {
      params: '{}',
      model: 'xs.campuses',
      method: 'query_sidebar'
    }

    this.props.dispatch({
      type: 'data/fetch',
      payload: {
        postData,
        reqPath: 'querydata',
        dataKey: 'siderBar'
      }
    })
  }

  renderSider() {
    return siderData.map((data, i) => (
      <Link to={data.url}>
        <Row className={styles.indexRow} style={{ background: data.background }}>
          <Col span="10">
            <img src={data.icon} style={{ width: 60, margin: '10px 0 0 12px' }} />
          </Col>
          <Col span="14" style={{ padding: '5px 10px 10px' }}>
            <div className={styles.indexNum}>{this.props.data ? this.props.data[i].qty1 : 0}</div>
            <div className={styles.indexText}>{data.name}</div>
          </Col>
        </Row>
      </Link>
    ))
  }
  render() {
    return (
      <div className={globalStyles.siderBar}>
        <div className={globalStyles.siderHeader}><Logo /></div>
        <div className={globalStyles.contentBody}>
          {this.renderSider()}
        </div>
      </div>
    )
  }
}

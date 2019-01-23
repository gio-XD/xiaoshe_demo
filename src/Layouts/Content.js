import React, { Component, Fragment } from 'react'
import {Col,Row,Button,Select,Breadcrumb } from 'antd'
import { withRouter } from 'dva/router'
import { connect } from 'dva';

import styles from './Content.css'


const Option = Select.Option;


@withRouter
@connect()
  export default (Wrapped) => {
    class Container extends Component {

      renderHeader() {
        return (
          <div className={styles.header}>
            {this.handleMatchHeader()}
          </div>
        )
      }

      handleMatchHeader() {
        const { pathname } = this.props.location
        if (pathname.split('/')[1] === 'index')
          return this.renderAnounce()
        if (pathname.split('/')[1] === 'main')
          return this.renderMainHeader()
      }

      renderAnounce() {
        return (
          <Fragment>
            <h4>公告</h4>
            <div style={{ fontSize: '14px' }}>各位老师，杨浦区教育局校舍修缮基本项目条款已更新，请查看详情</div>
          </Fragment>
        )
      }

      renderMainHeader() {
        console.log(123);
        
        return (
          <Fragment>
            <div>
            <Breadcrumb style = {{fontSize:20}}>
              <Breadcrumb.Item>学校列表</Breadcrumb.Item>
              <Breadcrumb.Item><a href="">学校列表</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="">学校列表</a></Breadcrumb.Item>
              <Breadcrumb.Item>学校列表</Breadcrumb.Item>
            </Breadcrumb>
            </div>
            <Row style={{marginTop:12}}>
              <Col span = '12'><Button style={{height:28}}>编辑</Button></Col>
              <Col span = '12'>
                <Button type='primary' style={{height:28,float:'right',marginLeft:4}}>查询</Button>
                <Select 
                style={{width:'60%',float:'right'}} 
                placeholder="请输入条件"
                mode="multiple"
                >
                  <Option key={1}>{1}</Option>
                  <Option key={2}>{2}</Option>
                </Select>
              </Col>
            </Row>
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

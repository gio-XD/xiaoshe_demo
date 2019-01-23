import React, { Component } from 'react'
import { Checkbox, Row, Col, Button, Select, message, Modal } from 'antd';
import checkData from '../../../configs/main/checkData'
import {connect} from 'dva'
import Year from '../../../configs/main/yearMatch'
import { arrDelete } from '../../../utils/common'
import SiderBarContainer from '../../../Layouts/SiderBar'
import style from './IndexPage.css'

@connect()
export default class SiderBar extends Component {
  state = {
    checkFilter: {

    }
  }

  handleCheck(section, { label, checked }) {
    const { checkFilter } = this.state
    let temp = { ...checkFilter }
    if (!temp[section]) temp[section] = []
    if (checked) {
      temp[section].push(label)
    } else {
      temp[section] = arrDelete(temp[section], label)
    }
    this.setState({
      checkFilter: temp
    })
    console.log(temp);
  }

  handleClick = () => {
    const { checkFilter } = this.state
    let temp = []
    if (checkFilter['学段']) {
      checkFilter['学段'].forEach(type => {
        if (type == "初中" || type == "高中") {
          temp.push("完中")
        }
        if (type == "教育行政部门") {
          temp = temp.concat(['辅读学校','教师进修学院（校）','少年宫','少科站','工读'])
        }
        if (type == "幼儿园") {
          temp = temp.concat(['幼托一体化','托儿所'])
        }
        if (type == "初中") {
          temp.push("职初");
        }
        if (type == "高中") {
          temp.push("职高");
        }
        temp.push(type)
      })
    }

    this.props.dispatch({
      type:'data/filterData',
      payload:{
        checkFilter:{
          ...checkFilter,
          ['学段']:temp
        }
      }
    })

  }

  renderSider = () => {
    return checkData.map(data => (
      <div className="colSty">
        <div className={style.mainTitle}>{data.section}</div>
        <Row className={style.mainCheckbox}>
          {this.renderCheck(data.data, data.section)}
        </Row>
      </div>
    ))
  }

  renderCheck = (data, section) => {
    return data.map(a => (
      <Col span="12">
        <Checkbox label={a.value} onChange={e => this.handleCheck(section, e.target)}>{a.label}</Checkbox>
      </Col>
    ))
  }

  renderVersionSelector = () => {
    const { location } = this.props
    return (
      <div style={{ fontSize: '12px', height: '32px', display: 'flex' }}>
        <span style={{ lineHeight: '32px' }}>版本切换：</span>
        <Select
          // size="large" 
          defaultValue={location.pathname.split("/")[2] === "0" ? "2016" : Year[location.pathname.split("/")[2]]}
          style={{ width: 72, height: 32 }}
          onSelect={e => {
            console.log(123);
          }}>
          <Select.Option value='1'>2016</Select.Option>
          <Select.Option value='3'>2015</Select.Option>
        </Select>
        {/*<Button size="large" onClick={this.showModal}>版本管理</Button>*/}
        <Button
          onClick={e => this.clickhref(e)}
        >数据对比</Button>
        {/* <Modal title="基础数据对照" visible={this.state.visible}
            onOk={this.handleOk} onCancel={this.handleCancel} width="70%"
          >
            <ModalList />
          </Modal> */}
      </div>
    )
  }

  render() {
    return (
      <SiderBarContainer>
        {this.renderVersionSelector()}
        {this.renderSider()}
        <div style={{ width: '100%', textAlign: 'center', marginTop: 16 }}>
          <Button type='primary' onClick={this.handleClick}>确定</Button>
        </div>
      </SiderBarContainer>
    )
  }
}

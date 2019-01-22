import React, { Component } from 'react'
import Logo from '../../../components/Logo'
import { Checkbox, Row, Col, Button, Select, message, Modal } from 'antd';
import checkData from '../../../configs/main/checkData'
import Year from '../../../configs/main/yearMatch'
import SiderBarContainer from '../../../Layouts/SiderBar'
import style from './IndexPage.css'


export default class SiderBar extends Component {
  renderSider = () => {
    return checkData.map(data => (
      <div className="colSty">
        <div className={style.mainTitle}>{data.section}</div>
        <Row className={style.mainCheckbox}>
          {this.renderCheck(data.data)}
        </Row>
      </div>
    ))
  }

  renderCheck = (data) => {
    return data.map(a => (
      <Col span="12">
        <Checkbox label={a.value} onChange={e => this.onChange(e)}>{a.label}</Checkbox>
      </Col>
    ))
  }

  renderVersionSelector = () => {
    const {location} = this.props
    return (
      <div style= {{fontSize:'12px',height:'32px',display:'flex'}}>
          <span style = {{lineHeight:'32px'}}>版本切换：</span>
          <Select 
            // size="large" 
            defaultValue={location.pathname.split("/")[2]==="0"?"2016":Year[location.pathname.split("/")[2]]} 
            style={{ width: 72,height:32 }} 
            onSelect={e=>{console.log(123);
            }}>
            <Select.Option value='1'>2016</Select.Option>
            <Select.Option value='3'>2015</Select.Option>
          </Select>
          {/*<Button size="large" onClick={this.showModal}>版本管理</Button>*/}
          <Button 
            onClick={e=>this.clickhref(e)}

            >数据对比</Button>
          {/* <Modal title="基础数据对照" visible={this.state.visible}
            onOk={this.handleOk} onCancel={this.handleCancel} width="70%"
          >
            <ModalList />
          </Modal> */}
        </div>
    )
  }

  onChange(e) {
    console.log(e);

  }

  render() {
    return (
        <SiderBarContainer>
          {this.renderVersionSelector()}
          {this.renderSider()}
        </SiderBarContainer>
    )
  }
}

import React, { Component } from 'react'
import style from './Logo.css'

export default class Logo extends Component {
  render() {
    return (
            <div>
                <div style={{ float: 'left' }}>
                    <img src='/img/logo.png'  className={style.logo} />
                </div>
                <div style={{ float: 'left', marginTop: 7, fontFamily: '微软雅黑', color: '#323232' }}>
                    <div style={{ fontSize: 14 }}>杨浦区</div>
                    <div style={{ fontSize: 14 }}>教育资产管理中心</div>
                    <div style={{ fontSize: 16 }}>校舍管理系统</div>
                </div>
            </div>
    )
  }
}

import React,{Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link} from 'dva/router'
import data from './data'
import styles from  './BasicLayouts.css'


  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  

class BasicLayout extends Component{
    renderMenu(){
        return data.map(a =>  <Menu.Item key={a.key}><Link to={a.url}>{a.name}</Link></Menu.Item>)
    }
    render(){
        return (
            <div className={styles.pageContainer}>
                <div className={styles.header}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '48px',float:'left' }}
                    >
                        {this.renderMenu()}
                    </Menu>

                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '48px',float:'right' }}
                    >
                        <SubMenu title='user'>
                                <Menu.Item key="setting:1">个人信息</Menu.Item>
                                <Menu.Item key="setting:2">修改密码</Menu.Item>
                                <Menu.Item key="setting:3">退出登录</Menu.Item>
                            </SubMenu>
                    </Menu>
                </div>
                <div className = 'content'>
                    {this.props.children || ''}
                </div>
            </div>
        )
    }
}

export default BasicLayout
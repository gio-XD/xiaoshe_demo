import React,{Component} from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link,Route,Redirect} from 'dva/router'
import {connect} from 'dva'
import data from '../configs/headMenu'
import styles from  './BasicLayouts.css'
import IndexPage from '../routes/Index' // 首页
import Main from '../routes/Main' // 基础数据



  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;
  

class BasicLayout extends Component{
    renderMenu(){
        return data.map(a =>  <Menu.Item key={a.key}><Link to={a.url}>{a.name}</Link></Menu.Item>)
    }

    handleClick = ({key}) => {
    //   this.props.dispatch({
    //       type:'global/save',
    //       payload:{
    //         headKey:key
    //       }
    //   })
    }
    render(){
        return (
            <div className={styles.pageContainer}>
                <div className={styles.header}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        selectedKeys={[this.props.selectedKeys]}
                        style={{ lineHeight: '48px',float:'left',fontSize:'16px' }}
                        onClick = {this.handleClick}
                    >
                        {this.renderMenu()}
                    </Menu>

                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '48px',float:'right',fontSize:'16px' }}
                    >
                        <SubMenu title='我的'>
                                <Menu.Item key="setting:1">个人信息</Menu.Item>
                                <Menu.Item key="setting:2">修改密码</Menu.Item>
                                <Menu.Item key="setting:3">退出登录</Menu.Item>
                            </SubMenu>
                    </Menu>
                </div>
                <div className = {styles.content}>
                 <Route path="/" exact render={() => <Redirect to='/index'/>} />
                 <Route path="/index" component={IndexPage} />
                 <Route path="/main" component={Main} />
                 <Route path="/schoolBefore" render={() => <div>schoolBefore</div>} />
                 <Route path="/apply" render={() => <div>apply</div>} />
                 <Route path="/examine" render={() => <div>examine</div>} />
                 <Route path="/project" render={() => <div>project</div>} />
                </div>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        selectedKeys:state.global.headKey || 'index'
    }
})(BasicLayout) 
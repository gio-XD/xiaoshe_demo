import React, { Component } from 'react'
import Logo from '../components/Logo'
import styles from './SiderBar.css'

export default (WrappedComponent) => {
    class AddLogo extends Component {
        render() {
          return (
            <div className = {styles.siderBar}>
                <div className =  {styles.siderHeader}><Logo/></div>
                <div className = {styles.contentBody}>
                    <WrappedComponent {...this.props}/>
                </div>
            </div>
          )
        }
      }

      return <AddLogo/>
}

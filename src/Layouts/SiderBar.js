import React, { Component } from 'react'
import Logo from '../components/Logo'
import styles from './SiderBar.css'

export default class AddLogo extends Component {
    render() {
        return (
            <div className={styles.siderBar}>
                <div className={styles.siderHeader}><Logo /></div>
                <div className={styles.contentBody}>
                    {this.props.children || null}
                </div>
            </div>
        )
    }
}
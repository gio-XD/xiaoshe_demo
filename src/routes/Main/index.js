import React, { Component,Fragment } from 'react'
import {Route,Redirect} from 'dva/router'

import Index from './IndexPage'

export default class Main extends Component {
  render() {
    return (
      <Fragment>
            <Route path='/main' exact render = {() => (<Redirect to='/main/0'/>)}/> 
            <Route path="/main/:year" exact component = {Index}/>
            <Route path="/main/:year/:school" exact render = {({match}) => (<Redirect to={`/main/${match.params.year}/${match.params.school}/SchoolBaseInfo`} />)}/>
            <Route path='/main/:year/:school/SchoolBaseInfo' exact  render = {() => (<div>SchoolBaseInfo</div>)}/>   
            <Route path="/main/:year/:school/LandInfo"  render = {() => (<div>LandInfo</div>)}/>
            <Route path="/main/:year/:school/LandOwnership" render = {() => (<div>LandOwnership</div>)}/>
            <Route path="/main/:year/:school/Building" render = {() => (<div>Building</div>)}/>
            <Route path="/main/:year/:school/House" render = {() => (<div>House</div>)}/>
            <Route path="/main/:year/:school/SportArea" render = {() => (<div>SportArea</div>)}/>
            <Route path="/main/:year/:school/Green" render = {() => (<div>Green</div>)}/>
            <Route path="/main/:year/:school/Facility" render = {() => (<div>Facility</div>)}/>
            <Route path="/main/:year/:school/Photo" render = {() => (<div>Photo</div>)}/>     
      </Fragment>
    )
  }
}

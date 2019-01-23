import React, { Component,Fragment } from 'react'
import {connect} from 'dva'
import {Table} from 'antd'
import Handleheader from '../../../Layouts/Content'
import schooltypes from '../../../configs/schoolTypes'
import cookie from 'react-cookie'

const columns = [{
  title: '序号',
  dataIndex: 'order',
}, {
  title: '单位名称',
  dataIndex: 'unit_name',
}, {
  title: '单位地址',
  dataIndex: 'unit_address',
}, {
  title: '办学类型',
  dataIndex: 'unit_type',
}, {
  title: '是否示范',
  dataIndex: 'unit_model',
}, {
  title: '街道',
  dataIndex: 'unit_street',
}]

@Handleheader
@connect(({data})=>(
  {data:data.tableData || []}
))
export default class Content extends Component {
  state = {
    pageIndex:1
  }
  componentDidMount(){
    const {pathname} = this.props.location
    let postData = {
      method:'query_data',
      model:"xs.basic.version",
      params: JSON.stringify(
        {
          version_id:pathname.split("/")[2]=="0"?false:Number(pathname.split("/")[2]),
          val:false
        }
      )
    }
    this.props.dispatch({
      type:'data/fetch',
      payload:{
        postData,
        dataKey:'tableData',
        reqPath:'querydata'
      }
    })
  }

  componentWillReceiveProps(next){
    if(next !== this.props && next.data.schools){
      next.data.schools.forEach( (a ,i)=>{
        a.order = i + 1,
        a.unit_type = schooltypes[a.unit_type]
      })
    }
  }
  render() {
    return (
      <Fragment>
        <Table columns={columns} 
                  dataSource={this.props.data.schools} 
                  size="middle" 
                  bordered 
                  // onRowClick={(record)=>this.click(record)} 
                  pagination={{current:this.state.pageIndex}} 
                  onChange={(pagination,filters,sorter)=>{this.setState({pageIndex:pagination.current})}}
            />
      </Fragment>
    )
  }
}

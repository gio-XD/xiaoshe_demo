// import data from '../Layouts/data'
import {matchHeaderWithRouter} from '../utils/common'
import cookie from 'react-cookie';
import Odoo from '../services/odoo';
const menu = ['index','main','schoolBefore','apply','examine','project']


const authoration = (datas) => {
  var parent = []
  //console.log(datas);
  datas.forEach(function(res){
    if(res.allow_view == "1"){
      parent.push(menu[Number(res.name)-1])
    }
  })
  cookie.save('menu', parent, { path: '/' });
  cookie.save('role', datas, { path: '/' });
}

export default {

  namespace: 'global',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen((pathname) => {
        dispatch({ type: 'save', payload: { headKey:matchHeaderWithRouter(pathname.pathname) } })
      })

      if(cookie.load('token')) return
      const postData = {
        nickname:'管理员',
        password:'tjxs',
        ip:window.returnCitySN.cip
      }
      Odoo.odoofuntion('checkuser',postData)
      .then( datas => {
        authoration(datas.roles)
        cookie.save('name', datas.name, { path: '/' });
        cookie.save('author', datas.author, { path: '/' });
        cookie.save('token', datas.token, { path: '/' });
        cookie.save('userunit', {unit_name:datas.unit_name,unit_id:datas.unit_id,phone:datas.phone}, { path: '/' });
        if(datas.roles[0].name == "1"){
          window.location.href="#/";
        }else{
          var post_data1={
            params:JSON.stringify({
                  version_id:1,
                  unit_id:Number(datas.unit_id)
                }),
            model:"xs.basic.unit",
            token:cookie.load('token'),
            method:"get_base",
          }
           cookie.save('unit_id',datas.unit_id, { path: '/' });
           Odoo.odoofuntion("querydata",post_data1,function(datas) {
              window.location.href="#/main/:0"+"/:"+datas.base_id+"/schoolBaseInfo";
          })    
        }
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' })
    },
  },

  reducers: {
    save(state, { type, payload }) {
      console.log(payload)

      return { ...state, ...payload }
    },
  },

}

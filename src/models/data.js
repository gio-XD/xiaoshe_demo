
import cookie from 'react-cookie';
import Odoo from '../services/odoo';


export default {

  namespace: 'data',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line

    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const token = cookie.load('token')
      ,postData = {
          ...payload.postData,
          token
      } 
      let response
      if(payload.reqPath === 'queryinfo') {

      }else{
        response = yield Odoo.odoofuntion(payload.reqPath,postData)
      }

      yield put({
        type:'save',
        payload:{
            [payload.dataKey]:response
        }
      })  
    },
  },

  reducers: {
    save(state, { type, payload }) {
      console.log(payload)

      return { ...state, ...payload }
    },
  },

}

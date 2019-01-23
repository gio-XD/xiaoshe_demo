
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

    *filterData({payload},{call,put,select}){ 
      let checkFilter = yield select( ({data}) => data.checkFilter)
      , tableData = yield select(({data}) => data.tableData)
      if(!checkFilter) checkFilter = {}

      checkFilter = {
        ...checkFilter,
        ...payload.checkFilter
      }
      console.log(checkFilter,tableData);
    }
  },

  reducers: {
    save(state, { type, payload }) {
      console.log(payload);
      
      return { ...state, ...payload }
    },
  },

}

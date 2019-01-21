import data from '../Layouts/data'
export default {

  namespace: 'global',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(( pathname ) => {
        console.log(pathname);
          let currentRouter =  data.find(a => pathname.pathname.indexOf(a.url) > -1)
          dispatch({type:'save',payload:{currentRouter}})
    })

    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, {type,payload}) {
      console.log(payload);
      
      return { ...state, ...payload };
    },
  },

};

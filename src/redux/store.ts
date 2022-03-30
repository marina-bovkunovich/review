import { createStore } from 'redux'

function reducer(state = [], action: any) {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

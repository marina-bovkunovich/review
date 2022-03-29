import { createStore } from 'redux'

function reducer(state = [], action: any) {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(reducer);

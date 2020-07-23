let state = {count: 0}

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

let action = {type: 'INCREASE_COUNT'}

function render(){
  document.body.textContent = state.count
}

//dispatch:persists changes to our state
//function breakdown:
//1. called our reducer
//2. then we took the return value from the reducer AND
//3. assigned it to be our new state.
function dispatch(action){
  state = changeState(state, action)
  render()
}
 
render()

dispatch({type: 'INCREASE_COUNT'})
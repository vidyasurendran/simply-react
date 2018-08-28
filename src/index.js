import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'

//Reducer
const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

//Store
const store = createStore(reducer)

class App extends React.Component {
    render() {
        return(
        <div>
            Count : {store.getState()}
            <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => store.dispatch({ type: 'DECREMENT' })}>-</button>
        </div>)
    }
}
const render = () => ReactDOM.render(<App />, document.getElementById('root'));

render()
store.subscribe(render)
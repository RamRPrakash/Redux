import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {increment ,decrement} from './actions'
function App() {
const counter = useSelector(state =>state.counter)
const isLogged = useSelector(state =>state.isLogged)
const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Hello CodeSandbox ->{counter}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>

{isLogged ? <h2>User Logged in</h2> : ''}
    </div>
  );
}
export default App
//import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Provider,useSelector,useDispatch } from 'react-redux';
import store from './redux/store';


const Counter =() => {
  // useSelector : knpassiw lih function bch yakhd redux state kamla w returniw state li bghina
  const count = useSelector(state=> state.count)
  const name = useSelector(state=> state.name)
  
  // useDispatch : dispatch 3ndo 3ala9a b reducer w reduxStore li kaykhelina nsefto action type bch ndero update l state
  const dispatch = useDispatch()

  const handelClick = (e)=> {
    const action = e.currentTarget.name
    dispatch({type : action})
  }

  return (
    <div>
      <h1>Counter : {count}</h1>
      <h1>Name : {name}</h1>
      <button name='INCREMENT' onClick={handelClick}> INCREMENT</button>
      <button name='DECREMENT' onClick={handelClick}> DECREMENT </button>
      <button name='RESET' onClick={handelClick}> RESET </button>
    </div>
  )
}


function App() {
  return (
    <Provider store={store} >
      <Counter />
    </Provider>
  );
}

export default App;

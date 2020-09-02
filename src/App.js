import React, { Component, useEffect} from 'react';
import './App.css';

import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

const SET_TODOS = "SET_TODOS";

export const rootReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
function App(props) {
  const todos  = useSelector((state)=> state.todos);
  const dispatch = useDispatch;


  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("/api/todos");
      dispatch({
        type: SET_TODOS,
        payload: data}
      );
    };
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      {props.children}
    </div>
  )
}


export default App;

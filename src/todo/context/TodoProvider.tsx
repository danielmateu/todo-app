


import { TodoContext } from "./TodoContext";
import { TodoState } from '../interfaces/interfaces';
import { useReducer } from "react";
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: '1',
      desc: 'Recolectar las piedras del infinito',
      completed: false,
    },
    {
      id: '2',
      desc: 'Poner lavadora',
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
}

interface props {
  children: JSX.Element | JSX.Element[]
}


export const TodoProvider = ({ children }: props) => {

  const [TodoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

  const toggleTodo = (id:string) => {
    dispatch({type:'toggleTodo',payload:{id}})
  }

  return (
    <TodoContext.Provider value={{
      todoState: TodoState,
      toggleTodo: toggleTodo,
    }}>
      {children}
    </TodoContext.Provider>
  )
}

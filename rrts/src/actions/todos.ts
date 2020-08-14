import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodosAction {
  type: ActionTypes.fechTodos;
  payload: Todo[];
}

export interface DeletetodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url);

    dispatch<FetchTodosAction>({
      type: ActionTypes.fechTodos,
      payload: response.data,
    });
  };
};

export const deleteTodo = (id: number): DeletetodoAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  };
};

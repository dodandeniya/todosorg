import React from 'react';
import { ITodoInfo } from '../../redux/interfaces/payloadTodo';

import './TodoItem.css';

/* eslint-disable-next-line */
export interface TodoItemProps {
  item: ITodoInfo;
}

export function TodoItem({ item }: TodoItemProps) {
  return (
    <div>
      <ul>
        <li>{item.id}</li>
        <li>{item.todoName}</li>
        <li>{item.status}</li>
      </ul>
    </div>
  );
}

export default TodoItem;

import { ITodoItem } from '@todosorg/common-share';

export interface ITodoInfo extends ITodoItem {
  id?: any;
}

export interface IPayloadTodos {
  todos?: Array<ITodoInfo>;
  error?: string;
  loading: Boolean;
}

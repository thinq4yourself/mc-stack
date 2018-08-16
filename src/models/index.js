import status from './status';
import member from './member';
import ToDo from './Todo';
import ToDoList from './TodoList';
import locale from './locale';

export default class Rehydrated {
  id = Math.random();
  @observable rehydrated;

  constructor(rehydrated) {
    this.rehydrated = rehydrated;
  }
}

export default {
  rehydrated,
  status,
  member,
  Todo,
  TodoList,
  locale,
};

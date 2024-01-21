export type Todo = {
  _id: string;
  content: string;
};

export interface TodoState {
  todos: Todo[];
}
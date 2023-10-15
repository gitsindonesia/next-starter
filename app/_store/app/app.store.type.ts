export type TAppStoreTodo = {
  id: string
  title: string
  completed: boolean
}

export type TAppStoreState = {
  counter: number
  todoList: TAppStoreTodo[]
}

export type TAppStoreMutation = {
  HANDLE_COUNTER: (type: 'decrement' | 'increment') => void
}

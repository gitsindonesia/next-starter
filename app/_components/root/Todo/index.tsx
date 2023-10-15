// Api
import { apiTodoFetchList } from '@/app/_api/todo/todo.api'

// Store
import { useAppStore } from '@/app/_store/app/app.store'

// Components
import { TodoSummary } from './components'
import { BaseStoreInitializer } from '@/app/_components/base'

const RootTodo = async () => {
  // Load todo list with some delay
  await new Promise(resolve => setTimeout(resolve, 3000))
  const response = await apiTodoFetchList()
  const todoList = response.data

  // Set todo list to store from server
  useAppStore.setState({ todoList })

  return (
    <>
      {/* Initiate server state to client */}
      <BaseStoreInitializer
        modules={[{ feature: 'app', state: { todoList } }]}
      />

      <section className='pb-10 pt-6 sm:py-24 px-6 2xl:px-0 bg-white dark:bg-neutral-900'>
        <div className='sm:max-w-4xl mx-auto text-center space-y-8'>
          <div className='flex items-center flex-col gap-4'>
            <h3 className='text-slate-800 dark:text-neutral-200 text-3xl sm:text-4xl font-medium'>
              Data fetching with Zustand!
            </h3>
            <TodoSummary />
          </div>
        </div>
      </section>
    </>
  )
}

export { RootTodo }

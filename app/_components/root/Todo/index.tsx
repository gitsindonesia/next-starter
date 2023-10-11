// Axios
import { axios } from '@/app/_plugins/axios.plugin'

const RootTodo = async () => {
  await new Promise(resolve => setTimeout(resolve, 3000))

  await axios('/todos?limit=5')

  return (
    <section className='pb-10 pt-6 sm:py-24 px-6 2xl:px-0 bg-white dark:bg-neutral-900'>
      <div className='sm:max-w-4xl mx-auto text-center space-y-8'>
        <div className='flex items-center flex-col gap-4'>
          <h3 className='text-slate-800 dark:text-neutral-200 text-3xl sm:text-4xl font-medium'>
            Data Fetching to the Rescue!
          </h3>
          <p className='text-3xl'>{'✅' || '❌'}</p>
        </div>
      </div>
    </section>
  )
}

export { RootTodo }

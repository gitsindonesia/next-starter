// Store
import { useAppStore } from '@/app/_store/app/app.store'

// Components
import { BaseStoreInitializer } from '@/app/_components/base'
import { Counter } from './components'

const RootZustand = async () => {
  useAppStore.setState({ counter: 1 })

  return (
    <>
      <BaseStoreInitializer
        storeName='app'
        state={{
          counter: 0
        }}
      />

      <section className='pb-10 pt-6 sm:py-24 px-6 2xl:px-0 bg-white dark:bg-neutral-900'>
        <div className='sm:max-w-4xl mx-auto text-center space-y-8'>
          <div className='flex items-center flex-col gap-4'>
            <h3 className='text-slate-800 dark:text-neutral-200 text-3xl sm:text-4xl font-medium'>
              Zustand Integration
            </h3>
            <Counter />
          </div>
        </div>
      </section>
    </>
  )
}

export { RootZustand }

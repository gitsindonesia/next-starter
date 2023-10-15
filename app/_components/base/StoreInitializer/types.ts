// Types
import { TAppStoreState } from '@/app/_store/app/app.store.type'

type TAppStore = {
  feature: 'app'
  state: Partial<TAppStoreState>
}

// Assign another store, this will be multiple
// e.g (TAppStore | TAnotherStore)[]
type TAppStoreList = TAppStore[]

export type TStoreInitializerProps = {
  modules: TAppStoreList
}

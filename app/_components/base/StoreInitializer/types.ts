// Types
import { TAppStoreState } from '@/app/_store/app/app.store.type'

type TAppStore = {
  storeName: 'app'
  state: TAppStoreState
}

export type TStoreInitializerProps = TAppStore

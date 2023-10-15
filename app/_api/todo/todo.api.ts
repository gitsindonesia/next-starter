// Axios
import { AxiosResponse } from 'axios'

// Plugins
import { axios } from '@/app/_plugins/axios.plugin'

// Store
import { TAppStoreTodo } from '@/app/_store/app/app.store.type'

/**
 * @description Fetch todo list
 *
 * @return {Promise<AxiosResponse<TAppStoreTodo[]>>} Promise<AxiosResponse<TAppStoreTodo[]>>
 */
export const apiTodoFetchList = async (): Promise<
  AxiosResponse<TAppStoreTodo[]>
> => axios.get('/todos?limit=5')

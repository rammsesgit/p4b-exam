'use client'

import { Provider } from 'react-redux'
import { store } from './store'

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}

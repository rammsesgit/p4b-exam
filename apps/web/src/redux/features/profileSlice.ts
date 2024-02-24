import { createSlice, Reducer } from '@reduxjs/toolkit'

export interface ProfileState {
  value: {
    id?: number
    name: string
    image_url?: string
  } | null
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState: { value: { name: 'Guest' } } satisfies ProfileState as ProfileState,
  reducers: {
    set(state, { payload }) {
      state.value = payload
    },
    clear(state) {
      state.value = null
    },
  },
})

export const { set, clear } = profileSlice.actions

export default profileSlice.reducer as Reducer

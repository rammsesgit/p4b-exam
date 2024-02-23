import { Dispatch } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store'

export const useAppDispatch: () => Dispatch<AppDispatch> = () => useDispatch()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

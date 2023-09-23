import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootStateType, AppDispatchType } from 'src/redux/index'

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

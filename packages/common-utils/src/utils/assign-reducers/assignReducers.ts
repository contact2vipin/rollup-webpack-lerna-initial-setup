import type { Action, Reducer } from '@reduxjs/toolkit'

export function assignReducers<
  RootState extends Record<string, any>,
  SliceReducers extends Record<string, Reducer<any, A>>,
  A extends Action<string>
>(
  rootReducer: Reducer<RootState, A>,
  reducersMap: SliceReducers,
  initialState: RootState
): Reducer<
  RootState & {
    [K in keyof SliceReducers]: ReturnType<SliceReducers[K]>
  },
  A
> {
  const reducerKeys = Object.keys(reducersMap) as Array<keyof SliceReducers>

  const combinedReducer: Reducer<any, A> = (
    state,
    action
  ) => {
    const baseState = state === undefined ? initialState : state

    const rootState = rootReducer(baseState, action)

    let hasChanged = rootState !== state
    const nextState: any = { ...rootState }

    for (const key of reducerKeys) {
      const reducer = reducersMap[key]
      const prevSlice = baseState[key]
      const nextSlice = reducer(prevSlice, action)

      if (nextSlice !== prevSlice) {
        hasChanged = true
        nextState[key] = nextSlice
      }
    }

    return hasChanged ? nextState : (state as any)
  }

  return combinedReducer
}

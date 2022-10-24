import type { RootState } from './interface'

export const authorizationSelector = (state: RootState) => state.authorization
export const privacySelector = (state: RootState) => state.privacy
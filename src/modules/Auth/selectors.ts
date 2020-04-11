interface RootState {
  auth: { loading: boolean; status: boolean }
}

export const getAuthLoading = (state: RootState): boolean => state.auth.loading

export const getAuthStatus = (state: RootState): boolean => state.auth.status

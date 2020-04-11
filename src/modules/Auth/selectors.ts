interface IUser {
  name: string
}

interface RootState {
  auth: {
    loading: boolean
    status: boolean
    user: IUser
  }
}

export const getAuthLoading = (state: RootState): boolean => state.auth.loading

export const getAuthStatus = (state: RootState): boolean => state.auth.status

export const getAuthUser = (state: RootState): IUser => state.auth.user

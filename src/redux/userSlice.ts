import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface UserState {
  isLoggedIn: boolean
  tokenRole: string
  user: any
  profile: {
    name: string
    data: string
  }[]
  userRole: string
}

const initialState: UserState = {
  isLoggedIn: false,
  tokenRole: '',
  user: [],
  profile: [{ name: '', data: '' }],
  userRole: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    activeUser(state, action: PayloadAction<any>) {
      state.isLoggedIn = true
      state.user = action.payload
    },
    removeUser(state) {
      state.isLoggedIn = false
      state.user = []
      state.profile = []
			state.userRole=''
    },
    userRole(state, action: PayloadAction<string>) {
      state.userRole = action.payload
    },
    setUserProfile(state, action: PayloadAction<{ name: string; data: string }[]>) {
      state.profile = action.payload
    },
  },
})

export const { activeUser, removeUser, setUserProfile, userRole} =
  userSlice.actions

export default userSlice.reducer

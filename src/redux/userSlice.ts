import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductProps } from 'components/Product/Product'

interface UserState {
  isLoggedIn: boolean
  tokenRole: string
  user: any
  profile: {
    name: string
    data: string
  }[]
  product: ProductProps[]
	products: ProductProps[]
  userRole: string
}

const initialState: UserState = {
  isLoggedIn: false,
  tokenRole: '',
  user: [],
  profile: [{ name: '', data: '' }],
  product: [],
  products: [],
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
			state.product=[]
			state.products=[]
			state.userRole=''
    },
    userRole(state, action: PayloadAction<string>) {
      state.userRole = action.payload
    },
    setUserProfile(state, action: PayloadAction<{ name: string; data: string }[]>) {
      state.profile = action.payload
    },
    setUserProducts(state, action: PayloadAction<ProductProps[]>) {
      state.product = action.payload
    },
    setProducts(state, action: PayloadAction<ProductProps[]>) {
      state.products = action.payload
    },
  },
})

export const { activeUser, removeUser, setUserProfile, userRole, setUserProducts, setProducts } =
  userSlice.actions

export default userSlice.reducer

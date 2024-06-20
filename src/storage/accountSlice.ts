import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface AccountState {
  background?: string
}

const initialState: AccountState = {
  background: 'https://psv4.userapi.com/c909518/u594770123/docs/d18/dbb1226b0d0c/background1.png',
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccountData(state, action: PayloadAction<AccountState>) {
      state.background = action.payload.background
    },
    clearAccountData(state) {
      state.background = undefined
    },
  },
})

export const {setAccountData, clearAccountData} = accountSlice.actions
export default accountSlice.reducer

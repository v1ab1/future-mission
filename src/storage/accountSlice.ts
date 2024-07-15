import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {STATIC_SERVER} from '../api/API_URL'

interface AccountState {
  background?: string
}

const initialState: AccountState = {
  background: STATIC_SERVER + 'skyBackground.png',
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

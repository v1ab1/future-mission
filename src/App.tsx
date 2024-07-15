import React from 'react'
import {createUseStyles} from 'react-jss'
import {Route, Routes} from 'react-router-dom'
import {
  Auth,
  Main,
  New,
  Settings,
  AccountSettings,
  GamesSettings,
  History,
  Experts,
  ExpertsList,
  NewExpert,
} from './pages'
import {useSelector} from 'react-redux'
import {RootState} from './storage/store'
import Test from './pages/Test'

export const App = () => {
  const c = useStyles()
  const account = useSelector((state: RootState) => state.account)

  return (
    <div className={c.root} style={{backgroundImage: `url(${account.background})`}}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/new' element={<New />} />
        <Route path='/experts' element={<Experts />} />
        <Route path='/experts_list' element={<ExpertsList />} />
        <Route path='/reg_new_expert' element={<NewExpert />} />
        <Route path='/history' element={<History />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/account_settings' element={<AccountSettings />} />
        <Route path='/games_settings' element={<GamesSettings />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    minHeight: '100vh',
    minWidth: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

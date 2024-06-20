import React from 'react'
import {createUseStyles} from 'react-jss'
import {Route, Routes} from 'react-router-dom'
import {Auth, Main, New, Settings, AccountSettings, GamesSettings} from './pages'
import {useSelector} from 'react-redux'
import {RootState} from './storage/store'

export const App = () => {
  const c = useStyles()
  const account = useSelector((state: RootState) => state.account)

  return (
    <div className={c.root} style={{backgroundImage: `url(${account.background})`}}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/new' element={<New />} />
        <Route path='/experts' element={<></>} />
        <Route path='/history' element={<></>} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/account_settings' element={<AccountSettings />} />
        <Route path='/games_settings' element={<GamesSettings />} />
      </Routes>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

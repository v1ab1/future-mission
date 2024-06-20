import {createUseStyles} from 'react-jss'
import {Input, Button, Logo} from '../../ui-kit'
import {useState} from 'react'

export const Auth = () => {
  const c = useStyles()
  const [error, setError] = useState('')

  return (
    <div className={c.root}>
      <div className={c.logoWrapper}>
        <Logo />
      </div>
      <Input placeholder='Почта' type='email' />
      <Input placeholder='Пароль' type='password' />
      <p className={c.error} style={{opacity: error ? 1 : 0}}>
        {error}
      </p>
      <Button text='Войти' onClick={() => setError('Неправильный пароль')} />
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
    width: 450,
  },
  logoWrapper: {
    marginLeft: -80,
  },
  error: {
    height: 40,
    color: '#37CEBF',
    alignSelf: 'flex-start',
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: 5,
  },
})

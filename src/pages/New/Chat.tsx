import {createUseStyles} from 'react-jss'
import {Button, Input} from '../../ui-kit'

const Logo = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='36' height='32' fill='none' viewBox='0 0 36 32'>
      <path
        fill='#fff'
        d='M3.602 2.106a1.21 1.21 0 00-1.167.1c-.164.113-.29.266-.364.44a.91.91 0 00-.05.55l3.107 9.7c.058.18.171.343.327.468.155.125.347.209.552.24l12.6 1.906c.593.106.593.874 0 .98l-12.6 1.906a1.16 1.16 0 00-.552.24.993.993 0 00-.327.468l-3.107 9.7a.91.91 0 00.05.55c.074.174.2.327.364.44a1.21 1.21 0 001.167.1l28.787-13c.184-.083.338-.21.446-.369A.93.93 0 0033 16a.93.93 0 00-.165-.525 1.073 1.073 0 00-.446-.369l-28.787-13z'
      ></path>
    </svg>
  )
}

export const Chat = () => {
  const c = useStyles()
  return (
    <div className={c.root}>
      <div className={c.content}></div>
      <div className={c.inputWrapper}>
        <Input className={c.input} />
        <Button className={c.buttonSend}>
          <Logo />
        </Button>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    backgroundColor: 'rgba(196, 196, 196, 0.4)',
    height: '100%',
    padding: [23, 32],
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  inputWrapper: {
    display: 'flex',
    gap: 8,
  },
  buttonSend: {
    width: 'auto',
    borderRadius: 8,
    padding: [10, 20],
  },
  input: {
    height: '100%',
  },
  content: {
    height: '100%',
  },
})

import {createUseStyles} from 'react-jss'

export const Logo = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='43' height='43' fill='none' viewBox='0 0 43 43'>
      <path
        fill='#fff'
        d='M8.076 28.222l3.618-2.85a3.58 3.58 0 001.375-2.813v-4.658a27.51 27.51 0 0116.862 0v4.676a3.58 3.58 0 001.375 2.814l3.6 2.83c1.447 1.13 3.51 1.022 4.812-.268l2.207-2.186c1.448-1.433 1.448-3.817-.09-5.16-11.597-10.143-29.073-10.143-40.67 0-1.538 1.343-1.538 3.727-.09 5.16l2.207 2.186c1.284 1.29 3.347 1.398 4.794.269z'
      ></path>
    </svg>
  )
}

export const EndCallButton = () => {
  const c = useStyles()
  return (
    <div className={c.root}>
      <Logo />
      <p>Закончить звонок</p>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    backgroundColor: '#F16060',
    color: 'white',
    display: 'flex',
    borderRadius: 5,
    justifyContent: 'center',
    gap: 15,
    alignItems: 'center',
    padding: [10, 0],
    cursor: 'pointer',
    '&:active': {
      backgroundColor: '#f18787',
    },
  },
})

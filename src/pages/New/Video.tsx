import {createUseStyles} from 'react-jss'

export const Logo = () => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='128' height='128' fill='none' viewBox='0 0 24 24'>
      <path
        stroke='#fff'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M3 3l3 3m15 15l-1.154-1.178M9.742 4.068a2 2 0 01.29-.055C10.145 4 10.268 4 10.514 4h3.019c.246 0 .369 0 .482.013a2 2 0 011.448.895c.062.095.117.205.227.425.055.11.083.165.114.213a1 1 0 00.724.447c.056.007.118.007.24.007h1.055c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874c.218.428.218.988.218 2.108v6.15m-1.177 4.472c-.418.178-.976.178-2.023.178h-11.6c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874c-.218-.428-.218-.988-.218-2.108V9.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C4.514 6.015 5.027 6.001 6 6m13.846 13.822l-5.284-5.26m0 0a3 3 0 11-4.124-4.124m4.124 4.124l-4.124-4.124m0 0L6 6'
      ></path>
    </svg>
  )
}

export const Video = () => {
  const c = useStyles()

  return (
    <div className={c.root}>
      <Logo />
      <p>Камера не включена</p>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    width: 534,
    height: 334,
    backgroundColor: '#BF89E2',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: 24,
  },
})

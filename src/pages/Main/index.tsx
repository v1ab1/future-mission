import {createUseStyles} from 'react-jss'
import {MainPageButton, TimeWidget} from '../../ui-kit'

export const Main = () => {
  const c = useStyles()

  return (
    <div className={c.root}>
      <TimeWidget />
      <div className={c.buttons}>
        <MainPageButton type='new' isGreen />
        <MainPageButton type='experts' />
        <MainPageButton type='history' />
        <MainPageButton type='settings' />
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 40,
    boxSizing: 'border-box',
    gap: 70,
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridColumnGap: 80,
    gridRowGap: 80,
  },
})

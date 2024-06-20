import {createUseStyles} from 'react-jss'
import {Video} from './Video'
import {SettingsButton} from './SettingsButton'
import {EndCallButton} from './EndCallButton'
import {Games} from '../../ui-kit'
import {Chat} from './Chat'

export const New = () => {
  const c = useStyles()

  return (
    <div className={c.root}>
      <div className={c.wrapper}>
        <div>
          <Chat />
        </div>
        <div className={c.right}>
          <Video />
          <Video />
          <SettingsButton />
          <EndCallButton />
        </div>
      </div>
      <div className={c.games}>
        <Games text='Таблица' />
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {},
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gridTemplateRows: '1fr',
    gridColumnGap: 30,
    gridRowGap: 0,
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: 30,
  },
  games: {
    display: 'flex',
    overflowY: 'hidden',
    overflowX: 'scroll',
    width: '55vw',
    gap: 8,
    paddingTop: 15,
  },
})

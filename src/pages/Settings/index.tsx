import {createUseStyles} from 'react-jss'
import {MainPageButton} from '../../ui-kit'

export const Settings = () => {
  const c = useStyles()

  return (
    <div className={c.root}>
      <MainPageButton type='arrow' isGreen />
      <MainPageButton type='games' />
      <MainPageButton type='profile' />
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    gap: 20,
  },
})

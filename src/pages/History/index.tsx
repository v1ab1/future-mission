import {createUseStyles} from 'react-jss'
import {Button} from '../../ui-kit'

const ClientButton = () => {
  const c = useStyles()

  return (
    <Button className={c.customButtonColors}>
      <div className={c.buttonContent}>
        <p>Клиент: Аня, 15 лет, 8 класс</p>
        <p>Цель: понять, мои таланты, проверить гипотезы, получить подтверждение моих интересов, куда направить силы</p>
      </div>
    </Button>
  )
}

export const History = () => {
  const c = useStyles()

  return (
    <div className={c.root}>
      <ClientButton />
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    backgroundColor: 'rgba(196, 196, 196, 0.4)',
    padding: [40, 20],
    minHeight: '90vh',
    height: '100%',
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  buttonContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  customButtonColors: {
    backgroundColor: '#a372d2',
    '&:active': {
      backgroundColor: '#b599d1',
    },
  },
})

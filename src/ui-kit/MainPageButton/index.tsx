import {FC} from 'react'
import {createUseStyles} from 'react-jss'
import cn from 'classNames'
import {New} from './New'
import {Experts} from './Experts'
import {History} from './History'
import {Settings} from './Settings'
import {useNavigate} from 'react-router-dom'
import {Games} from './Games'
import {Profile} from './Profile'
import {Arrow} from './Arrow'

type MainPageButtonProps = {
  type?: 'new' | 'experts' | 'history' | 'settings' | 'games' | 'profile' | 'arrow'
  isGreen?: boolean
  text?: string
  onClick?: () => void
}

export const MainPageButton: FC<MainPageButtonProps> = ({type, isGreen, text, onClick}) => {
  const c = useStyles()
  const navigate = useNavigate()

  const Logo = () => {
    switch (type) {
      case 'new':
        return <New />
      case 'experts':
        return <Experts />
      case 'history':
        return <History />
      case 'games':
        return <Games />
      case 'profile':
        return <Profile />
      case 'arrow':
        return <Arrow />
      default:
        return <Settings />
    }
  }

  const buttonText = () => {
    switch (type) {
      case 'new':
        return 'Начать занятие'
      case 'experts':
        return 'Эксперты'
      case 'history':
        return 'История занятий'
      case 'games':
        return 'Настройка заданий'
      case 'profile':
        return 'Настройка аккаунта'
      case 'arrow':
        return 'Назад'
      default:
        return 'Настройки'
    }
  }

  const url = () => {
    switch (type) {
      case 'new':
        return '/new'
      case 'experts':
        return '/experts'
      case 'history':
        return '/history'
      case 'games':
        return '/games_settings'
      case 'profile':
        return '/account_settings'
      case 'arrow':
        return '/'
      default:
        return '/settings'
    }
  }

  const go = () => {
    navigate(url())
  }

  return (
    <button
      className={cn(c.root, isGreen ? c.green : null)}
      onClick={() => {
        if (onClick) {
          onClick()
          return
        }
        go()
      }}
    >
      <div className={c.logo}>
        <Logo />
      </div>
      <p className={c.text}>{text ? text : buttonText()}</p>
    </button>
  )
}

const useStyles = createUseStyles({
  root: {
    cursor: 'pointer',
    backgroundColor: '#5BA5FF',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: [40, 20],
    borderRadius: 18,
    gap: 20,
    width: 250,
    height: 209,
    justifySelf: 'center',
    '&:active': {
      backgroundColor: '#79b6ff',
    },
  },
  green: {
    backgroundColor: '#37CEBF',
    '&:active': {
      backgroundColor: '#83dad1',
    },
  },
  logo: {
    borderRadius: 15,
    border: '3px solid white',
    width: 'fit-content',
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
})

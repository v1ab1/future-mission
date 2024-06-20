import {FC} from 'react'
import {createUseStyles} from 'react-jss'

type GamesProps = {
  text?: string
  onClick?: () => void
}

export const Games: FC<GamesProps> = ({text, onClick}) => {
  const c = useStyles()
  return (
    <button className={c.root} onClick={onClick}>
      {text}
    </button>
  )
}

const useStyles = createUseStyles({
  root: {
    borderRadius: 30,
    backgroundColor: '#37CEBF',
    color: 'white',
    padding: [10, 20],
    fontSize: 18,
    cursor: 'pointer',
    '&:active': {
      backgroundColor: '#40ffec',
    },
  },
})

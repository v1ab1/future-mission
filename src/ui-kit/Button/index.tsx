import {FC, ReactElement} from 'react'
import {createUseStyles} from 'react-jss'
import cn from 'classNames'

type ButtonProps = {
  onClick?: () => void
  text?: string
  children?: ReactElement
  className?: string
}

export const Button: FC<ButtonProps> = ({onClick, text, children, className}) => {
  const c = useStyles()
  return (
    <button className={cn(c.root, className)} onClick={onClick}>
      {children}
      {text}
    </button>
  )
}

const useStyles = createUseStyles({
  root: {
    backgroundColor: '#37CEBF',
    borderRadius: 5,
    width: '100%',
    boxSizing: 'border-box',
    padding: 15,
    color: 'white',
    fontSize: 18,
    cursor: 'pointer',
    '&:active': {
      backgroundColor: '#40ffec',
    },
  },
})

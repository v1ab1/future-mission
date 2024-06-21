import {FC, useState} from 'react'
import {createUseStyles} from 'react-jss'
import cn from 'classNames'
import {HiddenEye} from './HiddenEye'
import {UnhiddenEye} from './UnhiddenEye'

type InputProps = {
  placeholder?: string
  type?: 'email' | 'password' | 'text'
  className?: string
}

export const Input: FC<InputProps> = ({placeholder, type, className}) => {
  const c = useStyles()
  const [isHidden, setHidden] = useState(type === 'password')

  return (
    <div className={c.root}>
      <input
        className={cn(c.input, className)}
        placeholder={placeholder}
        type={!isHidden && type === 'password' ? 'text' : type}
      />
      <button className={c.button} onClick={() => setHidden(!isHidden)}>
        {type === 'password' ? isHidden ? <HiddenEye /> : <UnhiddenEye /> : null}
      </button>
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    position: 'relative',
    width: '100%',
  },
  input: {
    width: '100%',
    background: 'white',
    padding: [10, 50, 10, 20],
    fontSize: 18,
    borderRadius: 5,
    boxSizing: 'border-box',
    '&::placeholder': {
      color: 'gray',
    },
  },
  button: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
})

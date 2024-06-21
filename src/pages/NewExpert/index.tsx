import {createUseStyles} from 'react-jss'
import {Button, Cross, Input} from '../../ui-kit'
import {useNavigate} from 'react-router-dom'

export const NewExpert = () => {
  const c = useStyles()
  const navigate = useNavigate()

  return (
    <div className={c.root}>
      <div className={c.header}>
        <h1 className={c.headerText}>Регистрация нового эксперта</h1>
        <button className={c.cross} onClick={() => navigate('/experts')}>
          <Cross />
        </button>
      </div>
      <div className={c.block}>
        <p>Имя</p>
        <Input type='text' placeholder='Введите имя' />
      </div>
      <div className={c.block}>
        <p>Фамилия</p>
        <Input type='text' placeholder='Введите фамилию' />
      </div>
      <div className={c.block}>
        <p>Почта</p>
        <Input type='email' placeholder='Введите email' />
      </div>
      <div className={c.block}>
        <p>Пароль</p>
        <Input type='password' placeholder='Введите пароль' />
        <Input type='password' placeholder='Подтвердите пароль' />
      </div>
      <Button text='Создать эксперта' />
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    gap: 20,
    backgroundColor: 'rgba(196, 196, 196, 0.4)',
    padding: [40, 20],
    borderRadius: 12,
  },
  block: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 60,
  },
  headerText: {
    fontSize: 24,
  },
  cross: {
    cursor: 'pointer',
  },
})

import {createUseStyles} from 'react-jss'
import {MainPageButton} from '../../ui-kit'
import {useNavigate} from 'react-router-dom'

export const Experts = () => {
  const c = useStyles()
  const navigate = useNavigate()

  return (
    <div className={c.root}>
      <MainPageButton type='arrow' isGreen />
      <MainPageButton type='experts' text='Список экспертов' onClick={() => navigate('/experts_list')} />
      <MainPageButton type='profile' text='Регистрация эксперта' onClick={() => navigate('/reg_new_expert')} />
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    gap: 20,
  },
})

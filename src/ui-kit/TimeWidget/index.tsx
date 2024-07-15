import {useEffect, useState} from 'react'
import {createUseStyles} from 'react-jss'
import {Logo} from '../Logo'
import {STATIC_SERVER} from '../../api/API_URL'

export const backgroundDay = STATIC_SERVER + 'dayWidget.png'
export const backgroundNight = STATIC_SERVER + 'nightWidget.png'
const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
const months = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

export const TimeWidget = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date())
  const c = useStyles()

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = new Date()
      setCurrentTime(newTime)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div
      style={{
        backgroundImage: `url(${currentTime.getHours() > 5 && currentTime.getHours() < 21 ? backgroundDay : backgroundNight})`,
      }}
      className={c.root}
    >
      <Logo isHalfSized />
      <div>
        <p className={c.time}>
          {currentTime.getHours() >= 10 ? currentTime.getHours() : `0${currentTime.getHours()}`}:
          {currentTime.getMinutes() >= 10 ? currentTime.getMinutes() : `0${currentTime.getMinutes()}`}
        </p>
        <p className={c.date}>
          {daysOfWeek[currentTime.getDay()]}, {currentTime.getDate()} {months[currentTime.getMonth()]}{' '}
          {currentTime.getFullYear()}
        </p>
      </div>
      <div className={c.empty} />
    </div>
  )
}

const useStyles = createUseStyles({
  root: {
    width: '45vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
    backgroundSize: '130%',
    backgroundPositionX: 'right',
    backgroundPositionY: 'top',
  },
  time: {
    color: 'white',
    fontSize: 64,
    textAlign: 'center',
  },
  date: {
    color: 'white',
    fontSize: 32,
    fontWeight: 300,
    textAlign: 'center',
  },
  empty: {
    width: 90,
    height: 58,
  },
})

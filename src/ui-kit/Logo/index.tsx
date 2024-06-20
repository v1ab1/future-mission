import React, {FC} from 'react'

type LogoProps = {
  isHalfSized?: boolean
}

export const Logo: FC<LogoProps> = ({isHalfSized}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={isHalfSized ? '90' : '179'}
      height={isHalfSized ? '58' : '116'}
      fill='none'
      viewBox='0 0 179 116'
    >
      <g clipPath='url(#clip0_447_3)'>
        <path
          fill='#37CEBF'
          d='M130.707 50.75L80 0v116h24.146V62.833L130.707 87l24.147-24.167V116H179V0l-48.293 50.75z'
        ></path>
        <path fill='#fff' d='M0 24V0h80v24H0zM27 73V46h53v27H27z'></path>
      </g>
      <defs>
        <clipPath id='clip0_447_3'>
          <path fill='#fff' d='M0 0H179V116H0z'></path>
        </clipPath>
      </defs>
    </svg>
  )
}

import React, { FC } from 'react'
import NavUnlogged from '../nav/NavUnlogged'
import Cookies from '../cookies/Cookies'

interface WebProps {

}

const Web: FC<WebProps> = ({ }) => {
  return (
    <div className='flex flex-col p-5'>
      <p>Web</p>
      <Cookies/>
    </div>
  )
}

export default Web

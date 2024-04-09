import React, { FC, useState } from 'react'
import NavUnlogged from '../nav/NavUnlogged'
import Cookies from '../cookies/Cookies'
import WHero from './components/WHero'
import WResumen from './components/WResumen'

interface WebProps {

}

const Web: FC<WebProps> = ({ }) => {
  const [howIsCookies, setHowIsCookies] = useState('display-block')
  const [cookiesValue, setCookiesValue] = useState('')

  return (
    <div className='flex flex-col p-5 relative'>
      <WHero/>
      <WResumen/>
      <div className={`fixed bottom-5 left-10 z-50 mb-5 ${howIsCookies}`}>
        <Cookies setHowIsCookies={setHowIsCookies} setCookiesValue={setCookiesValue}/>
      </div>
    </div>
  )
}

export default Web

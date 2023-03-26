import React from 'react'
import {BsBriefcase} from 'react-icons/bs'
import {HiHome} from 'react-icons/hi'
import {GoMailRead} from 'react-icons/go'
import {BsTelephoneForward} from 'react-icons/bs'

const Details = () => {
  return (
    <div className='wicon'>
        <p className='iline'><span className='icon'><BsBriefcase/></span>Designer</p>
        <p className='iline'><span className='icon'><HiHome/></span>Sholavaram</p>
        <p className='iline'><span className='icon'><GoMailRead/></span>andandmadhanagopal@gamil.com</p>
        <p className='iline'><span className='icon'><BsTelephoneForward/></span>Designer</p>

    </div>
  )
}

export default Details
import React from 'react'
import '../styles/Banner.css'

function Marquee() {
  return (
    <div className='marquee-content flex'>
      <p className='flex gap-x-3 items-center ml-2 text-xs font-medium'>
        <span>GARANTIE TOUTE LA LOCATION</span>
        <span>
          <svg width="24" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
            <path d="m8.663 10.932.19-.08.08-.19L12 3.3l3.068 7.363.08.19.19.08L22.7 14l-7.363 3.068-.19.08-.08.19L12 24.7l-3.068-7.363-.08-.19-.19-.08L1.3 14l7.363-3.068Z" fill="#000" stroke="#000"></path>
            <path d="m8.663 8.932.19-.08.08-.19L12 1.3l3.068 7.363.08.19.19.08L22.7 12l-7.363 3.068-.19.08-.08.19L12 22.7l-3.068-7.363-.08-.19-.19-.08L1.3 12l7.363-3.068Z" fill="#fff" stroke="#000"></path>
          </svg>
        </span>
      </p>
      <p className='flex gap-x-3 items-center ml-2 text-xs font-medium'>
        <span>LIVRAISON OFFERTE</span>
        <span>
          <svg width="24" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
            <path d="m8.663 10.932.19-.08.08-.19L12 3.3l3.068 7.363.08.19.19.08L22.7 14l-7.363 3.068-.19.08-.08.19L12 24.7l-3.068-7.363-.08-.19-.19-.08L1.3 14l7.363-3.068Z" fill="#000" stroke="#000"></path>
            <path d="m8.663 8.932.19-.08.08-.19L12 1.3l3.068 7.363.08.19.19.08L22.7 12l-7.363 3.068-.19.08-.08.19L12 22.7l-3.068-7.363-.08-.19-.19-.08L1.3 12l7.363-3.068Z" fill="#fff" stroke="#000"></path>
          </svg>
        </span>
      </p>
      <p className='flex gap-x-3 items-center ml-2 text-xs font-medium'>
        <span>ASSURANCE INCLUSE</span>
        <span>
          <svg width="24" height="26" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
            <path d="m8.663 10.932.19-.08.08-.19L12 3.3l3.068 7.363.08.19.19.08L22.7 14l-7.363 3.068-.19.08-.08.19L12 24.7l-3.068-7.363-.08-.19-.19-.08L1.3 14l7.363-3.068Z" fill="#000" stroke="#000"></path>
            <path d="m8.663 8.932.19-.08.08-.19L12 1.3l3.068 7.363.08.19.19.08L22.7 12l-7.363 3.068-.19.08-.08.19L12 22.7l-3.068-7.363-.08-.19-.19-.08L1.3 12l7.363-3.068Z" fill="#fff" stroke="#000"></path>
          </svg>
        </span>
      </p>
    </div>
  )
}

export default Marquee
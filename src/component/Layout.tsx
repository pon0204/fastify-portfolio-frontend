import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Layout: FC = ({children}) => {
  return (
    <div>
      <div className='h-16 bg-blue-400 flex'>
        <Link to='/' className='p-4 text-xl text-white'>
          App Name
        </Link>
      </div>
      {children}  
    </div>
  )
}

export default Layout

import React from 'react'

const Header = ({ title, amount }) => {
  return (
    <div className={`flex flex-col justify-between min-w-[170px] cursor-pointer group`}>
      <div className='mb-10'>
          <p className='text-2xl font-semibold uppercase text-slate-800 mb-2 dark:text-gray-200'>{title}</p>
          <p className='font-semibold text-3xl text-gray-400'>{amount}</p>
      </div>
      <div className='h-1 max-w-[170px] bg-gray-300'><div className='h-1 w-0 
        group-hover:w-full bg-violet-400 transition-all ease-in-out delay-75 duration-200'></div>
      </div>
    </div>
  )
}

export default Header
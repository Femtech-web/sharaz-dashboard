import React from 'react'
import { chatData2 } from '../../data/dummy';

const MessagePage = () => {
  return (
    <div  className='bg-white rounded-xl p-5 dark:bg-second-dark-bg mb-6'>
        <p className='text-slate-600 font-semibold my-4 
          text-3xl mb-8 dark:text-gray-200'>Messages</p>
        <div className="mt-8">
            {chatData2?.map((item, index) => (
            <div key={index} className="flex items-center gap-5 border-b-1 border-color 
                p-3 leading-8 cursor-pointer hover:border-gray-400 
                hover:border-2 hover:rounded-md">
                <div className="relative">
                <img
                    className="rounded-full h-10 w-10"
                    src={item.image}
                    alt={item.message}
                />
                <span
                    style={{ background: item.dotColor }}
                    className="absolute inline-flex rounded-full h-2 w-2 right-0 -top-1"
                />
                </div>
                <div>
                <p className="font-semibold dark:text-gray-200 ">{item.message}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">{item.time}</p>
                </div>
            </div>
            ))}
            </div>
    </div>
  )
}

export default MessagePage
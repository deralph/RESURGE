import React from 'react'

const Button = ({Icon,title,onClick}) => {
  return (
     <button
          onClick={onClick}
          className="mt-6 inline-flex items-center justify-center w-full ma x-w-xs p-4 bg-[#DD231FD9] text-white font-medium rounded-lg "
          aria-label="Upload memory"
        >
          {Icon && <Icon className='mr-2'/>} {title}
        </button>
       
  )
}

export default Button

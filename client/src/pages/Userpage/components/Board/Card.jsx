import React from 'react'

export default function Card({ id, title, description, priority, createdAt }) {
  return (
    <div className='flex flex-col gap-2 bg-brand-whiteColor w-full rounded-sm p-4 cursor-pointer'>
        <h1 className='text-2xl text-brand-tertiayColor font-bold items-start'>{title}</h1>
        <p className='text-slate-400 text-sm'>{description}</p>
        <p>{priority}</p>
        <p>{createdAt}</p>
    </div>
  )
}

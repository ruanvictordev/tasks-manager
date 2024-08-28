import React from 'react'

export default function Card({ id, title, description, priority, createdAt }) {
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className='flex flex-col gap-2 bg-brand-whiteColor w-full rounded-md p-4 border-t-4 border-t-blue-500 cursor-pointer'>
        <h1 className='text-2xl text-brand-tertiayColor font-bold items-start break-words'>{title}</h1>
        <p className='text-slate-400 text-sm break-words'>{description}</p>
        <p>{priority}</p>
        <p>Created at {formattedDate}</p>
    </div>
  )
}

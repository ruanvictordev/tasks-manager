import React from 'react';

export default function Card({ id, title, description, status, priority, createdAt, onEdit, onDelete }) {
  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className='flex flex-col gap-2 bg-brand-whiteColor w-full rounded-md p-4 border-t-4 border-t-blue-500'>
      <h1 className='text-2xl text-brand-tertiayColor font-bold break-words'>{title}</h1>
      <p className='text-slate-400 text-sm break-words'>{description}</p>
      <p>Priority: {priority}</p>
      <p>Created at {formattedDate}</p>
      <div className='flex justify-between gap-4 max-md:flex-col'>
        <div 
          className='flex bg-brand-tertiayColor p-2 w-full justify-center items-center rounded-md cursor-pointer'
          onClick={() => onEdit({ id, title, description, status, priority })} 
        >
          <h3 className='text-brand-whiteColor'>Edit</h3>
        </div>
        <div 
          className='flex bg-red-600 p-2 w-full justify-center items-center rounded-md cursor-pointer'
          onClick={() => onDelete({id})}
        >
          <h3 className='text-brand-whiteColor'>Delete</h3>
        </div>
      </div>
    </div>
  );
}

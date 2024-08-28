import React from 'react';

export default function Column({ title, imageSrc, count, children }) {
  return (
    <div className="flex flex-col gap-4 bg-slate-200 w-96 p-4 rounded-md max-lg:w-full">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img className="w-5" src={imageSrc} alt={`${title} icon`} />
          <h1>{title}</h1>
        </div>
        <span className="bg-slate-600 text-brand-whiteColor text-sm font-bold py-1 px-2 rounded-sm">
          {count}
        </span>
      </div>
      <div className='flex flex-col gap-4'>
        {children}
      </div>
    </div>
  );
}

import React from 'react';
import Board from './components/Board/Board';
import Button from '../../components/Buttons/Button';
import useInfoUser from '../../hooks/useInfoUser';

export default function Userpage() {
  const userName = useInfoUser();

  return (
    <section className="flex flex-col gap-8 justify-center items-center">
      <div className='flex flex-col gap-4 justify-center items-center'>
          <h1 className='text-6xl text-center text-brand-tertiayColor font-bold'>Welcome, {userName}!</h1>
          <h2 className='text-slate-400 text-center text-lg'>What you do today?</h2>
          <Button>New Task</Button>
      </div>
      <Board />
    </section>
  )
}

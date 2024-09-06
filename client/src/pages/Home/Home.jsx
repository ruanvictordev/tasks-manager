import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <section className='flex flex-col gap-y-20 justify-center items-center'>
        <div className='flex flex-col gap-2 justify-center items-center'>
          <h1 className='text-6xl text-center text-brand-tertiayColor font-bold m-0'>Tasks Manager</h1>
          <h2 className='text-slate-400 text-center text-lg'>Organize your tasks simply and online!</h2>
          <a onClick={() => navigate("/register")} className='text-brand-tertiayColor underline cursor-pointer'>Register now!</a>
        </div>

        <div className='flex justify-center items-center'>
          <img className='w-3/4 max-md:w-full' src="./home.svg" alt="" />
        </div>
      </section>
    </>
  )
}

import React from "react";
import { Toaster } from 'react-hot-toast';
import useLogin from '../../hooks/useLogin';
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import Form from "../../components/Form/Form";

export default function Login() {
  const { email, password, handleEmailChange, handlePasswordChange, handleSubmit } = useLogin();

  return (
    <section className="flex flex-col justify-center items-center">
      <div className='flex flex-col gap-4 justify-center items-center'>
          <h1 className='text-6xl text-center text-brand-tertiayColor font-bold'>Login as User</h1>
          <h2 className='text-slate-400 text-center text-lg'>Access your acount and finish your tasks!</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-center text-2xl text-brand-tertiayColor font-bold">
          Login
        </h2>
        <label>
          Os campos com <span className="text-red-700">*</span> são obrigatórios.
        </label>
        <div>
          <label>
            <span className="text-red-700">*</span> Informe seu email:
          </label>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="bg-transparent"
          />
        </div>
        <div>
          <label>
            <span className="text-red-700">*</span> Informe sua senha:
          </label>
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={handlePasswordChange}
            className="bg-transparent"
          />
        </div>
        <Button
          type="submit"
          bgColor="bg-blue-500"
          fontColor="text-white"
          className="w-full"
          onClick={handleSubmit}
        >
          Entrar
        </Button>
      </Form>
      <Toaster />
    </section>
  );
}

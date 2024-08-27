import React from "react";
import { Toaster } from "react-hot-toast";
import Input from "../../components/Inputs/Input";
import Button from "../../components/Buttons/Button";
import Form from "../../components/Form/Form";

import { useRegister } from "../../hooks/useRegister";

export default function Register() {
  const {name,setName,email,setEmail,password,setPassword,handleRegister} = useRegister();

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-6xl text-center text-brand-tertiayColor font-bold">
          Register Account
        </h1>
        <h2 className="text-slate-400 text-center text-lg">
          Create your account and start managing your tasks!
        </h2>
      </div>
      <Form onSubmit={handleRegister}>
        <h2 className="text-center text-2xl text-brand-tertiayColor font-bold">
          Register
        </h2>
        <label>
          The fields with: <span className="text-red-700">*</span> are required.
        </label>
        <div>
          <label>
            <span className="text-red-700">*</span> Input your name:
          </label>
          <Input
            type="text"
            placeholder="Name"
            className="bg-transparent"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>
        <div>
          <label>
            <span className="text-red-700">*</span> Input your email:
          </label>
          <Input
            type="email"
            placeholder="Email"
            className="bg-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div>
          <label>
            <span className="text-red-700">*</span> Input your password:
          </label>
          <Input
            type="password"
            placeholder="Password"
            className="bg-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          bgColor="bg-blue-500"
          fontColor="text-white"
          className="w-full"
        >
          Register
        </Button>
      </Form>
      <Toaster />
    </section>
  );
}

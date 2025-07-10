'use client'

import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'

import { loginUser } from '../../services/AuthService';

export default function Login() {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginDetails = { username, password };
    try {
      const data = await loginUser(loginDetails); // this is already JSON
      console.log("User Logged In:", data);
      navigate('/dashboard');

    } catch (error) {
      console.error("Error during login", error);
      alert(error.message);
    }
  };


  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">Login</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Please enter your login credentials.</p>
      </div>
      <form onSubmit={handleLogin} method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <input
                id="username"
                name="username"
                type="text"
                placeholder='Username or Email'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                autoComplete="email"
                className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-center text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Password'
                autoComplete="password"
                className="block w-full rounded-full bg-white px-3.5 py-2 text-base text-center text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-full bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
        <div className="mt-10">
            <Field className="flex gap-x-4 sm:col-span-2">
            <Label className="text-sm/6 text-gray-600">
              Need to Create Account?{' '}
              <a href="/register" className="font-semibold whitespace-nowrap text-indigo-600">
                Create Account
              </a>
              .
            </Label>
          </Field>
        </div>
      </form>
    </div>
  )
}
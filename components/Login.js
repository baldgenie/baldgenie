import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
import {
    LocationMarkerIcon, PrinterIcon, WifiIcon, DeviceMobileIcon, HomeIcon
} from '@heroicons/react/solid';
import { useRouter } from 'next/router';

function Login() {

    const router = useRouter();
    const { data: session, status } = useSession()

    console.log(session);

    if (session) {
        router.push('/')
    }

    return (

        <div className=" sm:w-4/5 md:w-3/5 lg:w-4/12 mx-auto flex items-center justify-center py-12 px-4  border-2 ">
            <div className="space-y-8   m-2 my-4   ">
                <div>
                    <div className='w-2/5     mx-auto m-2 my-4'>

                        <img
                            className=''
                            alt='loading'
                            src='/baldgenie.png'>
                        </img>
                    </div>
                    <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or
                        <a href="#" className="font-medium text-theme hover:text-indigo-500"> Sign Up </a>
                    </p>
                </div>
                <htmlForm className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-theme focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-theme hover:text-indigo-500"> Forgot your password? </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-theme hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Sign in
                        </button>

                        <h2 className='my-4 text-center font-semibold'>Or</h2>


                        <button onClick={(e) => { e.preventDefault(); signIn('google') }} type="submit" className="group relative w-full flex justify-center py-2 px-4  text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700  items-center  ">
                            <img
                                className='h-6 mr-4 '
                                src='/google.png'
                            />
                           Continue with Google
                        </button>


                    </div>
                </htmlForm>
            </div>
        </div>
    )
}

export default Login
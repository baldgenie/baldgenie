import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react"
import Link from 'next/link'

function Navbar() {



    const { data: session, status } = useSession()


    if (status === "authenticated") {
        return (
            <div className='flex items-center justify-between text-white'>
                <p className='p-1 px-4 font-semibold bg-theme border-2 rounded-lg '  >
                    {session.user.name}</p >
                <Link href='/api/auth/signout'>
                    <a className='p-1 px-4 font-semibold bg-theme border-2 rounded-lg  hover:bg-blue-600' onClick={(e) => { e.preventDefault(); signOut() }} >
                        Sign Out
                    </a>
                </Link>
            </div>
        )
    }

    return (
        <div>
            {!session &&
                <div className='flex items-center justify-end text-white font-semibold' >

                    <Link href='/login'>
                        <a  className=' p-1 px-4 bg-theme border-2 rounded-lg  hover:bg-blue-600'>
                            List your bussiness
                        </a>
                    </Link>
                    <Link href='/login'>
                        <a  className='p-1 px-4 bg-theme border-2 rounded-lg  hover:bg-blue-600'>
                            Sign In
                        </a>
                    </Link>


              

                </div>
            }

        </div>
    )
}

export default Navbar
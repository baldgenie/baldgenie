import React, { useContext, useEffect, useState } from 'react'


function Footer() {









    const socialMediaIcons = [
        { name: 'Facebook', url: '/socialmedia/facebook.png' },
        { name: 'Instagram', url: '/socialmedia/instagram.png' },
        { name: 'LinkedIn', url: '/socialmedia/linkedin.png' },
        { name: 'Twitter', url: '/socialmedia/twitter.png' },
        { name: 'Youtube', url: '/socialmedia/youtube.png' },
    ]

    return (

        <footer className={``}>
            <div className='flex bg-gray-700 p-6 flex-col md:flex-row items-center justify-center space-y-4 md:justify-around '>

                <div>
                    <div className='w-40 mx-auto m-2 my-4'>
                        <img
                            className=''
                            alt='loading'
                            src='/baldgenie.png'>
                        </img>
                    </div>
                    <div className='flex space-x-2'>
                        {socialMediaIcons.map(item => {
                            return (

                                <div className='w-6' key={item.name}>
                                    <img
                                        src={item.url}
                                        alt=''
                                    >
                                    </img>
                                </div>

                            )
                        })}
                    </div>
                </div>

                <div className='flex justify-around ' >
                    <div className='text-white flex flex-col  '>
                        <h1 className='font-semibold'>About Us</h1>
                        <h2 className='text-sm cursor-pointer hover:text-red-500'>Home</h2>
                        <h2 className='text-sm cursor-pointer hover:text-red-500'>Faqs</h2>
                        <h2 className='text-sm cursor-pointer hover:text-red-500'>Terms & Conditions</h2>
                        <h2 className='text-sm cursor-pointer hover:text-red-500'>Privacy</h2>
                    </div>
                    <div className='text-white flex flex-col ml-6 '>
                        <h1 className='font-semibold'>Contact Us</h1>
                        <h2 className='text-sm cursor-pointer hover:text-red-500'>Carriers</h2>
                        <h2 className='text-sm cursor-pointer hover:text-red-500'>Advertise with Us</h2>
                        <h2 className='text-sm cursor-pointer hover:text-red-500'>Help</h2>
                        <h2 className='text-sm cursor-pointer hover:text-red-500'>Faqs</h2>
                    </div>
                </div>
            </div>
        </footer>


    )
}

export default Footer
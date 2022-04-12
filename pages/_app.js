import { useSession } from "next-auth/react"
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import Footer from '../components/Footer'
import VideoState from '../context/videos/VideoState'
import '../styles/globals.css'
import '../styles/nProgress.css'
import { SessionProvider } from "next-auth/react"
import { getSession } from "next-auth/react"
import { useEffect, useState } from "react"


function MyApp({ Component, pageProps }) {


  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();

  })
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  })




  return (
    <>

      <Head>
        <title>Desi Porn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>

      <VideoState>
        <div className='flex space-x-3 m-2'>
          <p className='sm:invisible visible  bg-red-500 h-10 rounded p-2'>smallScreen </p>
          <p className='sm:visible invisible md:invisible  bg-green-500 rounded p-2'>mediumScreen </p>
          <p className='md:visible invisible lg:invisible   bg-yellow-500 rounded p-2'>largeScreen </p>
          <p className='lg:visible invisible   bg-blue-500 rounded p-2'>Xtra-largeScreen </p>

        </div>
        <SessionProvider  >
          <Component {...pageProps} />
        </SessionProvider>
        <hr />
        <Footer />
      </VideoState>
    </>
  )
}

export default MyApp

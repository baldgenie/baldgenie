import Head from 'next/head'
import {
  SearchIcon, LocationMarkerIcon, PrinterIcon, WifiIcon, DeviceMobileIcon, HomeIcon
} from '@heroicons/react/solid';
import { useContext, useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { BeatLoader } from 'react-spinners';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { LoremIpsum } from 'react-lorem-ipsum';
import Navbar from '../components/Navbar';



export default function Home() {

  const [locationState, setloaction] = useState(null)
  const [loading, setloading] = useState(false)

  const [coordinates, setCoordinates] = useState({})

  const router = useRouter();





  const categories = [
    { name: 'Computers', url: '/category/computer.png', color: 'text-red-500' },
    { name: 'Printers', url: '/category/printer.png', color: 'text-blue-500' },
    { name: 'WIFI & Networking', url: '/category/wifi-router.png', color: 'text-green-500' },
    { name: 'Mobiles & Tablets', url: '/category/smartphone.png', color: 'text-yellow-500' },
    { name: 'Audio & Video', url: '/category/home-theater.png', color: 'text-lime-500' },
    { name: 'Smart Home', url: '/category/smart-home.png', color: 'text-pink-500' },
    { name: 'TV Mounting', url: '/category/television.png', color: 'text-orange-500' },
    { name: 'Home Security', url: '/category/home-security.png', color: 'text-red-500' },
  ]

  const serachTerms = ['lorem', 'printer shop', 'lorem', 'computer near me', 'lorem', 'lorem', 'house security', 'lorem', 'lorem', 'printer shop', 'lorem', 'computer near me', 'lorem', 'audio video', 'lorem', 'lorem', 'tv mounting', 'lorem', 'printer shop', 'lorem', 'computer near me', 'lorem', 'lorem', 'house security', 'lorem', 'lorem', 'printer shop', 'lorem', 'computer near me', 'lorem', 'audio video', 'lorem', 'lorem', 'tv mounting', 'lorem',]

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setCoordinates({ latitude: position.coords.latitude, longitude: position.coords.longitude })
    }, showError)
    function showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.")
          break;
        case error.POSITION_UNAVAILABLE:
          alert("Location information is unavailable.")
          break;
        case error.TIMEOUT:
          alert("The request to get user location timed out.")
          break;
        case error.UNKNOWN_ERROR:
          alert("An unknown error occurred.")
          break;
        default:
          alert("An unknown error occurred.")

      }
    }
  }, [])


  const getLocationHnadler = () => {
    async function fetchData() {

      if (!locationState) {
        setloading(true)

        var location = {}
        try {
          const response = await fetch(`https://www.mapquestapi.com/geocoding/v1/reverse?key=${'IfCQDj22QUdEF9hV6zuxCuo0L8J1HXAP'}&location=${coordinates.latitude},${coordinates.longitude}&includeRoadMetadata=false&includeNearestIntersection=true`)
          location = await response.json()
          
          setloaction(location.results[0].locations[0])
          setloading(false)

        } catch (error) {
          location = { country_name: 'india' }
        }
        localStorage.setItem("location", JSON.stringify(location))

      }


    }
    fetchData()
  }
  return (
    <div >
      <Head>
        <title>Baldgenie - Services at your doorsteps</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>



      <main className='m-4 sm:w-4/5  sm:mx-auto  '>
        <Navbar />


        {/* Location and Search Services  */}
        <div className='w-3/5  sm:w-2/5 md:w-1/5 mx-auto m-2 my-4'>

          <img
            className=''
            alt='loading'
            src='/baldgenie.png'>
          </img>
        </div>

        <div className='border-2 border-gray-200   flex my-2  rounded shadow-xl items-center md:w-4/5 md:mx-auto'>
          <div onClick={getLocationHnadler} className=' flex items-center justify-center space-x-2  p-1  my-2 border-r-2 border-gray-400 pr-2 cursor-pointer '>
            <LocationMarkerIcon className='h-6 text-red-600' />
            {locationState &&
              <p className='font-semibold text-sm '>{`${locationState.adminArea5},${locationState.adminArea1} `}</p>
            }

            <div className={`flex justify-center   ${loading ? "" : "hidden"} `}>
              <BeatLoader loading size={10} color={'red'} />
            </div>

            {!locationState &&

              <p onClick={getLocationHnadler} className={`hover:text-red-400 font-semibold text-xs ${loading ? "hidden" : ''}  `}>Detect my location</p>
            }



          </div>
          <div className=' flex items-center justify-center space-x-2  p-1 pl-3'>
            <SearchIcon className='h-6 text-gray-500' />
            <input className='outline-0 w-full 	' type="text" id="fname" name="fname" placeholder='Search for services' />
          </div>
        </div>




        {/* All categories */}

        <div className=' my-10 '>
          <h1 className='font-semibold text-lg'>All Categories</h1>
          <p className=''>
            {/* <LoremIpsum p={1} /> */}
            Lorem ipsum odor amet, consectetuer adipiscing elit. Proin consequat integer venenatis maximus litora ornare integer penatibus. Natoque cras turpis iaculis ligula accumsan facilisis? Orci et ridiculus porta cras
          </p>


          <div className='flex flex-wrap items-center justify-center mx-auto md:grid md:grid-cols-4 lg:w-3/5'>

            {categories.map(category => {
              return (
                <div className='w-40 m-2 p-4 rounded-lg shadow-xl  flex flex-col items-center justify-center space-y-2  aspect-video hover:scale-105 hover:bg-slate-200 transition cursor-pointer' key={category.name}>
                  <div className='w-16 relative'>
                    <img
                      src={category.url}
                    ></img>
                    <p className={`absolute ${category.color} text-9xl rounded-full -right-3 -top-14`}>.</p>
                  </div>
                  <h2 className='text-center mt-1 text-sm font-semibold'>{category.name}</h2>
                </div>
              )
            })}
          </div>
        </div>

        {/* Popular Search terms */}
        <div className='my-4'>

          <h1 className='font-semibold text-lg'>Popular Search Terms</h1>
          <div className='flex flex-wrap bg-gray-200'>
            {serachTerms.map(tag => {
              return (
                <p key={tag} className='m-1'>{`.  ${tag}`}</p>
              )
            })}
          </div>
        </div>


        {/* What our customer says */}
        <div className='my-6'>
          <h1 className='font-semibold text-xl md:text-3xl'>What our customer&apos; says</h1>
          <h2 className=' text-md'>Proin consequat integer venenatis maximus litora ornare integer penatibus. Natoque cras turpis iaculis ligula</h2>

          <div className='md:flex'></div>


        </div>


        {/* Customer reviews  */}

        <div className='md:flex font-footer'>


          <div className='m-4 p-4 rounded-lg shadow-xl border-2   border-gray-300 shadow-blue-200'>

            <h1>&apos;&apos;Lorem ipsum odor amet, consectetuer adipiscing elit. Proin consequat integer venenatis maximus litora ornare&apos;&apos;</h1>

            <div className='  flex items-center justify-start mt-2' >
              <div className='w-16 relative '>
                <img
                  src='/profile.png'
                ></img>

              </div>
              <div className='flex flex-col items-center ml-2'>
                <h2 className='text-center text-sm font-semibold'>John Smith</h2>
                <h3 className='text-xs'>{`Miami, FL`}</h3>
              </div>

            </div>
          </div>
          <div className='m-4 p-4 rounded-lg shadow-xl border-2   border-gray-300 shadow-blue-200'>

            <h1>&apos;&apos;Lorem ipsum odor amet, consectetuer adipiscing elit. Proin consequat integer venenatis maximus litora ornare&apos;&apos;</h1>

            <div className='  flex items-center justify-start mt-2' >
              <div className='w-16 relative border-2 '>
                <img
                  src='/profile.png'
                ></img>

              </div>
              <div className='flex flex-col items-center ml-2'>
                <h2 className='text-center text-sm font-semibold'>John Smith</h2>
                <h3 className='text-xs'>{`Miami, FL`}</h3>
              </div>

            </div>
          </div>
          <div className='m-4 p-4 rounded-lg shadow-xl border-2   border-gray-300 shadow-blue-200 '>

            <h1>&apos;&apos;Lorem ipsum odor amet, consectetuer adipiscing elit. Proin consequat integer venenatis maximus litora ornare&apos;&apos;</h1>

            <div className='  flex items-center justify-start mt-2' >
              <div className='w-16 relative border-2 '>
                <img
                  src='/profile.png'
                ></img>

              </div>
              <div className='flex flex-col items-center ml-2'>
                <h2 className='text-center text-sm font-semibold'>John Smith</h2>
                <h3 className='text-xs'>{`Miami, FL`}</h3>
              </div>

            </div>
          </div>

        </div>
      </main>



    </div>
  )
}

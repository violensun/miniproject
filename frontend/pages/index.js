import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import config from '../config/config'
import Link from 'next/link'

export default function Home({ token }) {
  const [namelist, setNamelist] = useState([])
  const [open, setOpen] = useState([])

  useEffect(() => {
    profileUser()
  }, [])

  const profileUser = async () => {
    try {
        // console.log('token: ', token)
        await axios.get(`${config.URL}/alluser`).then((respones) => {
          console.log(respones.data)
          setNamelist(respones.data)

          respones.data.map((data) =>{
            open.push(false)
          }
          )
        })
        // console.log('user: ', users.data)
        // setUser(users.data)
        console.log(namelist)
        console.log(open)
    }
    catch (e) {
        console.log(e)
    }

  }


  const openPopup = (id) => {
    const popup =  [...open]
    popup[id-1] = true
    console.log(popup)
    setOpen(popup)
  }

  const closePopup =(id) => {
    const popup =  [...open]
    popup[id-1] = false
    console.log(popup)
    setOpen(popup)
  }

  return (
    <Layout>
    <Head>
        <title>Yellow Pages</title>
    </Head>
    <div className='min-h-screen flex'>
        <Navbar links={token} />
        <div className='w-10/12 bg-maincon' condition={namelist != null}>
          <div className='w-full text-center'>
             <h1 className='text-3xl my-5 font-bold text-fth'>Yellow Pages</h1>
          </div>
          <div className='w-full text-right p-2 text-fth'>
             <span className=''>*click card to see contract</span>
          </div>
          <div className='flex flex-wrap'>
            {namelist.map((namelist) => (
              <div className='w-1/5'>
                <div className={`card ${namelist.username} h-24 p-2`} onClick={() => openPopup(namelist.id)}>
                  <div className='bg-sec w-full h-full flex justify-center items-center text-fth rounded'>
                    <span>{namelist.username}</span>
                  </div>
                </div>
                <div className={`card-popup ${namelist.username} absolute h-full w-full bg-black bg-inherit bg-opacity-30 top-0 left-0`} style={{display: open[namelist.id-1]?"block": "none" }}>
                  <div className={`content fixed m-auto left-0 right-0 top-0 bottom-0 w-1/5 h-1/5 bg-sec  rounded p-2 text-fth text-xl`}>
                    <div className='w-full h-full rounded bg-trd p-2'>
                    <p className='flex'>
                    <span className='w-4/12'>
                      Name : 
                    </span>
                    <span>
                      {namelist.name}
                    </span>
                  </p>
                  <p className='flex'>
                    <span className='w-4/12'>
                      Tel : 
                    </span>
                    <Link href={`tel: ${namelist.phone}`}>
                      {namelist.phone}
                    </Link>
                  </p>
                  <p className='flex'>
                    <span className='w-4/12'>
                      Email :
                    </span>
                    <Link  href={`mailto: ${namelist.email}`}>
                      {namelist.line}
                    </Link>
                  </p>
                  <p className='flex'>
                    <span className='w-4/12'>
                      Facebook : 
                    </span>
                    <Link  href={`http://www.facebook.com/${namelist.facebook}`} target="_blank">
                    <a target="_blank">{namelist.facebook}</a>
                      
                      </Link>
                  </p>
                  <p className='flex'>
                    <span className='w-4/12'>
                      Line : 
                    </span>
                    <Link  href={`http://line.me/ti/p/${namelist.line}`} >
                      <a target="_blank">
                      {namelist.line}
                      </a>
                      </Link>
                  </p>
                    </div>
                  <div className='absolute top-0 right-0 p-2' onClick={() => closePopup(namelist.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  </div>
                </div>
              </div>
            ) 
            )}
          </div>
        </div>
    </div>
</Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token")) 
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}

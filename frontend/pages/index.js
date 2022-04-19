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
        <title>First Page</title>
    </Head>
    <div className={styles.container}>
        <Navbar />
        <div condition={namelist != null}>
          <div>
            {namelist.map((namelist) => (
              <div>
                <div className={`card ${namelist.username}`} onClick={() => openPopup(namelist.id)}>
                  <span>{namelist.username}{toString(namelist.open)}</span>
                </div>
                <div className={`card-popup ${namelist.username} absolute h-full w-full bg-black bg-inherit bg-opacity-30 top-0 left-0`} style={{display: open[namelist.id-1]?"block": "none" }}>
                  <div className={`content fixed m-auto left-0 right-0 top-0 bottom-0 w-1/5 h-1/5 bg-sec  rounded p-2 text-fth text-xl`}>
                  <p>
                    <span>
                      Phone : 
                    </span>
                    <Link href={`tel: ${namelist.phone}`}>
                      {namelist.phone}
                    </Link>
                  </p>
                  <p>
                    <span>
                      Line : 
                    </span>
                    <span>
                      {namelist.line}
                    </span>
                  </p>
                  <p>
                    <span>
                      Email : 
                    </span>
                    <Link href={`mailto: ${namelist.email}`}>
                      {namelist.line}
                    </Link>
                  </p>
                  <div className='absolute top-0 right-0 p-2' onClick={() => closePopup(namelist.id)}>
                    <span>X</span>
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

import Head from 'next/head' 
import Layout from '../components/layout' 
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import config from '../config/config'

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
                <div className={`card-popup ${namelist.username}`} style={{display: open[namelist.id-1]?"block": "none" }}>
                  <p>
                    <span>
                      Phone : 
                    </span>
                    <span>
                      {namelist.phone}
                    </span>
                  </p>
                  <p>
                    <span>
                      Line : 
                    </span>
                    <span>
                      {namelist.line}
                    </span>
                  </p>
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

import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'
import { useRouter } from 'next/router'

export default function Logout({ token }) {

    const [status, setStatus] = useState('')

    useEffect(() => {
        logout()
    }, [])

    const router = useRouter()

    const logout = async () => {
        console.log('remove token: ', token)
        let result = await axios.get(`${config.URL}/logout`, { withCredentials: true })
        console.log(result)
        setStatus("Logout successful")
                if (result)
                router.push('/login')
        
    }
 
    return (
        <Layout>
            <Head>
                <title>User profile</title>
            </Head>
            <div className='min-h-screen flex'>
                <Navbar />
                <div className='w-10/12 bg-maincon flex items-center justify-center'>
                    <div>
                    <h1 className='w-full text-center text-3xl my-5 font-bold text-fth'>Logout</h1>
                <div>
                    <h2> {status}  </h2>
                </div>
                    </div>
                </div>            
            </div>
        </Layout>
    )
}

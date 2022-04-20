import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

const Profile1 = ({ token }) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        profileUser()
    }, [])

    const profileUser = async () => {
        try {
            // console.log('token: ', token)
            const users = await axios.get(`${config.URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
             console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }
 
    return (
        <Layout>
            <Head>
                <title>User profile</title>
            </Head>
            <div className='min-h-screen flex'>
                <Navbar links={token} />
                <div className='w-10/12 bg-maincon flex items-center justify-center'>
                    <div className='bg-sec p-2 rounded'>
                        <div className='w-full h-full rounded bg-trd p-5 px-20'>
                            <h1 className='w-full text-center text-3xl my-5 font-bold text-fth'>User profile</h1>
                            <div>
                                <div>
                                    <p className='flex'>
                    <span className='w-4/12'>
                                         Name :
                                        </span>
                                        <span>
                                            {user.name}
                                        </span>
                                    </p>
                                    <p className='flex'>
                    <span className='w-4/12'>Email : </span>
                                        <span>{user.email}</span>
                                    </p>
                                    <p>
                                        <span>Facebook : </span>
                                        <span>{user.facebook}</span>
                                    </p>
                                    <p className='flex'>
                    <span className='w-4/12'>Tel : </span>
                                        <span>{user.phone}</span>
                                    </p>
                                        <p className='flex'>
                    <span className='w-4/12'>
                                        Line :
                                        </span>
                                        <span>
                                            {user.line}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </Layout>
    )
}

export default withAuth(Profile1)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}

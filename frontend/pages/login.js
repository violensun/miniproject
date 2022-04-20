import Head from 'next/head'
import Layout from '../components/layout'
import { useState } from 'react'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import config from '../config/config'
import { useRouter } from 'next/router'

export default function Login({ token }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('')

    const router = useRouter()

    const login = async (req, res) => {
        try {
            let result = await axios.post(`${config.URL}/login`,
                { username, password },
                { withCredentials: true })
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            setStatus(result.status + ': ' + result.data.user.username)
            router.push('/profile')
        }
        catch (e) {
            console.log('error: ', JSON.stringify(e.response))
            setStatus(JSON.stringify(e.response).substring(0, 80) + "...")
        }
    }

    const loginForm = () => (
        <div>
            <div className='text-fth'>
                Username
            </div>
            <div>
                <input className='bg-transparent text-fth focus:border-sec focus:ring-sec' type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='text-fth'>
                Password
            </div>
            <div>
                <input className='bg-transparent text-fth focus:border-sec focus:ring-sec' type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
        </div>
    )

    const copyText = () => {
        navigator.clipboard.writeText(token)
    }

    return (
        <Layout>
            <Head>
                <title>Login</title>
            </Head>
            <div className='min-h-screen flex'>
                <Navbar />
                <div className='w-10/12 bg-maincon flex items-center justify-center'>
                    <div className='bg-sec p-2 rounded'>
                        <div className='w-full h-full rounded bg-trd p-5 px-20'>
                        <h1 className='w-full text-center text-3xl my-5 font-bold text-fth'>Login</h1>
                        {loginForm()}
                        <div className=' text-center m-5'>
                            <button className='bg-sec p-3 px-5 rounded text-fth' onClick={login}>Login</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}

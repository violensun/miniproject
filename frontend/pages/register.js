
import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import axios from 'axios'
import config from '../config/config'
import { useRouter } from 'next/router'

export default function Register({ token }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [status, setStatus] = useState('')
    const [facebook, setFb] = useState('')
    const [line, setLine] = useState('')
    const [name, setName] = useState('')

    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const router = useRouter()
    
    const register = async (req, res) => {
        try{
            event.preventDefault();
            let result = await axios.post(`${config.URL}/register`,
                { username, email, password,phone ,facebook,line,name})
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            alert(result.data.message)
            setStatus(result.data.message)
            if(result.data.message == 'Register success'){
                
                router.push('/login')
            }
        }
        catch (e) {
            console.log(e)
        }

    }

    const registerForm = () => (
        <div className={styles.gridContainer}>
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
                Email
            </div>
            <div>
                <input className='bg-transparent text-fth focus:border-sec focus:ring-sec' type="email"
                    name="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='text-fth'>
                Password
            </div>
            <div className='text-fth'>
                <input className='bg-transparent text-fth focus:border-sec focus:ring-sec' type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className='text-fth'>
                Name
            </div>
            <div>
                <input className='bg-transparent text-fth focus:border-sec focus:ring-sec' type="text"
                    name="name"
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='text-fth'>
                Phone
            </div>
            <div>
                <input className='bg-transparent text-fth focus:border-sec focus:ring-sec' type="tel"
                    name="phone"
                    placeholder="phone"
                    onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className='text-fth'>
                FacebookID
            </div>
            <div className='text-fth'>
                <input className='bg-transparent text-fth focus:border-sec focus:ring-sec' type="text"
                    name="facebook"
                    placeholder="facebookID"
                    onChange={(e) => setFb(e.target.value)} />
            </div>
            <div className='text-fth'>
                LineID
            </div>
            <div>
                <input className='bg-transparent text-fth focus:border-sec focus:ring-sec' type="text"
                    name="line"
                    placeholder="lineID"
                    onChange={(e) => setLine(e.target.value)} />
            </div>

        </div>
    )


    return (
        <Layout>
            <Head>
                <title>Register</title>
            </Head>
            <div className='min-h-screen flex'>
                <Navbar links={token} />
                <div className='w-10/12 bg-maincon flex items-center justify-center'>
                    <div className='bg-sec p-2 rounded'>
                        <div className='w-full h-full rounded bg-trd p-5 px-20'>
                        <h1 className='w-full text-center text-3xl my-5 font-bold text-fth'>Register</h1>
                        <div className={styles.content}>
                            {registerForm()}
                        </div>
                        <div className=' text-center m-5'>
                            <button className='bg-sec p-3 px-5 rounded text-fth' type='submit' onClick={register}>Register</button>
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
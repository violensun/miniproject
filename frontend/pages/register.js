
import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import axios from 'axios'
import config from '../config/config'

export default function Register({ token }) {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [status, setStatus] = useState('')
    const [facebook, setFb] = useState('')
    const [line, setLine] = useState('')

    const profileUser = async () => {
        console.log('token: ', token)
        const users = await axios.get(`${config.URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('user: ', users.data)
    }

    const register = async (req, res) => {
        try{
            event.preventDefault();
            let result = await axios.post(`${config.URL}/register`,
                { username, email, password,phone ,facebook,line})
            console.log('result: ', result)
            console.log('result.data:  ', result.data)
            console.log('token:  ', token)
            alert(result.data.message)
            alert(result.data.status)
            setStatus(result.data.message)
            if(result.data.message == 'Register success'){
                window.location.href = '/login'
            }
        }
        catch (e) {
            console.log(e)
        }

    }

    const registerForm = () => (
        <div className={styles.gridContainer}>
            <div>
                Username :
            </div>
            <div>
                <input type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                Email :
            </div>
            <div>
                <input type="email"
                    name="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                Password :
            </div>
            <div>
                <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                Phone :
            </div>
            <div>
                <input type="tels"
                    name="phone"
                    placeholder="phone"
                    onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div>
                Facebook : 
            </div>
            <div>
                <input type="text"
                    name="facebook"
                    placeholder="facebookID"
                    onChange={(e) => setFb(e.target.value)} />
            </div>
            <div>
                Line : 
            </div>
            <div>
                <input type="text"
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
            <div className={styles.container}>
                <Navbar />
                <h1>Register</h1>
                <div><b>Token:</b> {token.substring(0, 15)}...
                <button
                        onClick={() => { navigator.clipboard.writeText(token) }}>
                        Copy token
                </button>
                </div>
                <br />
            Status: {status}
                <br /><br />
                <div className={styles.content}>
                    {registerForm()}
                </div>

                <div>
                    <button type='submit' onClick={register}>Register</button>
                </div>
            </div>
        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}

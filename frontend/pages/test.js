import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'

const Test = ({ token }) => {

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
            // console.log('user: ', users.data)
            setUser(users.data)
        }
        catch (e) {
            console.log(e)
        }

    }

    return (
        <Layout>
            <Head>
                <title>test create</title>
            </Head>
            <div className={styles.container}>
                <Navbar />
                <h1>test create</h1>
                <div>
                    <b>Token:</b> {token.substring(0, 15)}... <br /><br />
                    This route is protected by token, user is required to login first.
                    <br />
                    Otherwise, it will be redirect to Login page
                    <br /><br />
                    {JSON.stringify(user)}
                    <p>
                        <span>{user.id}</span></p>
                    <p><span>{user.id}</span></p>
                    <p><span>{user.id}</span></p>
                </div>
            </div>
        </Layout>
    )
}

export default withAuth(Test)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
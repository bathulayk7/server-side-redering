import Head from "next/head"
import React from 'react'
import Link from 'next/link'


//npx create-next-app
//npm run dev
//go to browser: localhost:3000
function about() {
    return (
        <div>
            <Head>
                <title>about us</title>
            </Head>
            <nav>
            <Link to="/" href="/">Home</Link>{" "}
            <Link to="/about" href="/about">About-Us</Link>{" "}
            <Link to="/contact" href="/contact">Contact-Us</Link>
        </nav>
            <h1>About Us</h1>
            <hr/>
            <p>this is about us page</p>
        </div>
    )
}

export default about

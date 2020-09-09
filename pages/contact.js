import Head from "next/head"
import React from "react";
import Link from "next/link"
function contact() {
  return (
    <div>
         <Head>
                <title>contact us</title>
            </Head>
        <nav>
            <Link to="/" href="/">Home</Link>{" "}
            <Link to="/about" href="/about">About-Us</Link>{" "}
            <Link to="/contact" href="/contact">Contact-Us</Link>
        </nav>
      <h1>Contact  Us</h1>
      <hr />
      <p>this is contact us page</p>
    </div>
  );
}

export default contact;

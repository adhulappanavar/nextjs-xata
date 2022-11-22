//https://github.com/andybrewer/mvp

import Head from "next/head";

const Index = () => {
    return <main>
        <Head>
            <link rel="stylesheet" href="https://unpkg.com/mvp.css" />
        </Head>
        <h1> My To Do List</h1>
        <ul>
            <li>
                <label>
                <input type="checkbox" />
                Buy oat milk
                </label>
            </li>
        </ul>
    </main>
}


export default Index;
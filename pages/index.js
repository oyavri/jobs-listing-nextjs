import Head from 'next/head';
import Layout from '../layouts/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
        <h1 className={styles.title}>Welcome to Job Listing app.</h1>
    </div>
  )
}

Home.Layout = Layout;

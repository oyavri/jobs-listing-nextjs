import Head from 'next/head';
import CreateListing from '../components/CreateListing';
import Layout from '../components/Layout';

export default function CreateJobListing() {
  return (
    <div>
      <Head>
        <title>Create Job Listing</title>
      </Head>
      <Layout>
        <CreateListing/>
      </Layout>
    </div>
  )
}

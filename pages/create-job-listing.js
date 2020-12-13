import Head from 'next/head';
import CreateListing from '../components/CreateListing';
import Layout from '../layouts/Layout';

export default function CreateJobListing() {
  return (
    <div>
      <Head>
        <title>Create Job Listing</title>
      </Head>
        <CreateListing/>
    </div>
  )
}

CreateJobListing.Layout = Layout;

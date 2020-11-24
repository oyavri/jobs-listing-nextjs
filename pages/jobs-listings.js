import Head from 'next/head';
import Layout from '../components/Layout';
import Listing from '../components/Listing';
import { useEffect, useState } from 'react'

const url = "http://localhost:5001/jobs-listing-app-db9cc/us-central1/jobsListing";



export default function JobsListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch(`${url}/getListings`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'no-cors',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setListings([...listings, ...data]);
      })
      .catch((err) => { alert(err) });
  }, []);

  return (
    <div>
      <Head>
        <title>Jobs Listings</title>
      </Head>
      <Layout>
        {
          listings.map((jobListing) => {
            return (<Listing title={jobListing.title}
              position={jobListing.jobPosition}
              experience={jobListing.requiredExperience}
              reqSkills={jobListing.requiredSkills}
              info={jobListing.jobInfo}
              schedule={jobListing.workSchedule}
              location={jobListing.location}
              key={jobListing.id}
            />)
          })
        }
      </Layout>
    </div>
  )
}

/*

*/

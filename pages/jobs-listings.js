import Head from 'next/head';
import Layout from '../components/Layout';
import Listing from '../components/Listing';

const myListings = [
  {
    "title": "title",
    "jobPosition": "positionInput",
    "requiredExperience": "experienceInput",
    "requiredSkills": "reqSkillsInput",
    "jobInfo": "infoInput",
    "workSchedule": "scheduleInput",
    "location": "locationInput",
    "id": 1,
  },
  {
    "title": "title",
    "jobPosition": "positionInput",
    "requiredExperience": "experienceInput",
    "requiredSkills": "reqSkillsInput",
    "jobInfo": "infoInput",
    "workSchedule": "scheduleInput",
    "location": "locationInput",
    "id": 2,
  }
]

export default function JobsListings() {
  return (
    <div>
      <Head>
        <title>Jobs Listings</title>
      </Head>
      <Layout>
          {
            myListings.map((jobListing) => {
              return (<Listing title={jobListing.title} 
                position={jobListing.position} 
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

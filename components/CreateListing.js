import { useState } from 'react';
import styles from '../styles/CreateListing.module.css';

const url = "http://localhost:5001/jobs-listing-app-db9cc/us-central1/jobsListing"

export default function CreateListing() {

  const [title, setTitle] = useState('');
  const [positionInput, setPositionInput] = useState('');
  const [experienceInput, setExperienceInput] = useState('');
  const [reqSkillsInput, setReqSkillsInput] = useState('');
  const [infoInput, setInfoInput] = useState('');
  const [scheduleInput, setScheduleInput] = useState('');
  const [locationInput, setLocationInput] = useState('');

  const [buttonStatus, setButtonStatus] = useState(false);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  }
  const handlePositionInput = (e) => {
    setPositionInput(e.target.value);
  }
  const handleExperienceInput = (e) => {
    setExperienceInput(e.target.value);
  }
  const handleReqSkillsInput = (e) => {
    setReqSkillsInput(e.target.value);
  }
  const handleInfoInput = (e) => {
    setInfoInput(e.target.value);
  }
  const handleScheduleInput = (e) => {
    setScheduleInput(e.target.value);
  }
  const handleLocationInput = (e) => {
    setLocationInput(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonStatus(true);

    const submittedForm = {
      "title": title,
      "jobPosition": positionInput,
      "requiredExperience": experienceInput,
      "requiredSkills": reqSkillsInput,
      "jobInfo": infoInput,
      "workSchedule": scheduleInput,
      "location": locationInput,
      "isOnline": true
    }

    const request = fetch(`${url}/createJobListing`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': 'no-cors',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submittedForm)
    })

    request.then(response => response.json())
    .then((data) => {
        alert(`${data.isSuccessful ? 'Creation of job listing is successful!': 'Something went wrong.'}`);
        setTitle('');
        setPositionInput('');
        setExperienceInput('');
        setReqSkillsInput('');
        setInfoInput('');
        setScheduleInput('');
        setLocationInput('');
        setButtonStatus(false);
      }
    )
    .catch((err) => {
        alert('Something went wrong');
        alert(err);
    })
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.createListingForm}>
        <h3 className={styles.header}>
          Create Job Listing
        </h3>
        <fieldset>
          <h4>Title:</h4>
          <input value={title}
            onChange={handleTitle}
            placeholder='Summary of the job'
            type='text'
            tabIndex='1'
            required
            autoFocus />
        </fieldset>
        <fieldset>
          <h4>
            Job Position:
          </h4>
          <input value={positionInput} 
            onChange={handlePositionInput} 
            placeholder='Frontend, backend, fullstack etc.' 
            type='text' 
            tabIndex='2' 
            required 
            autoFocus />
        </fieldset>
        <fieldset>
          <h4>
            Required Experience:
          </h4>
          <input value={experienceInput} 
            onChange={handleExperienceInput} 
            placeholder='Newly graduated, 3+ years etc.' 
            type='text' 
            tabIndex='3' 
            required 
            autoFocus />
        </fieldset>
        <fieldset>
          <h4>
            Required Skills:
          </h4>
          <textarea value={reqSkillsInput} 
            onChange={handleReqSkillsInput} 
            placeholder='ReactJS, NextJS etc.' 
            type='text' 
            tabIndex='4' 
            required 
            autoFocus />
        </fieldset>
        <fieldset>
          <h4>
            Job Info:
          </h4>
          <textarea value={infoInput} 
            onChange={handleInfoInput} 
            placeholder='Build web apps' 
            type='text' 
            tabIndex='5' 
            required 
            autoFocus />
        </fieldset>
        <fieldset>
          <h4>
            Work Schedule:
          </h4>
          <input value={scheduleInput} 
            onChange={handleScheduleInput} 
            placeholder='Part-time, full-time' 
            type='text' 
            tabIndex='6' 
            required 
            autoFocus />
        </fieldset>
        <fieldset>
          <h4>
            Location:
          </h4>
          <textarea value={locationInput} 
            onChange={handleLocationInput} 
            placeholder='Beşiktaş/İstanbul' 
            type='text' 
            tabIndex='7' 
            required 
            autoFocus />
        </fieldset>
        <button className={styles.button} disabled={buttonStatus} tabIndex='7'>
            Create Listing
        </button>
      </form>
    </div>
  );
}

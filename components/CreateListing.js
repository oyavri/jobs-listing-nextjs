import { useState } from 'react';
import fetch from 'next';
import styles from '../styles/CreateListing.module.css';
import { globalCounter } from '../utils/getSequentialNumber';

export default function CreateListing() {

  const [title, setTitle] = useState('');
  const [positionInput, setPositionInput] = useState('');
  const [experienceInput, setExperienceInput] = useState('');
  const [reqSkillsInput, setReqSkillsInput] = useState('');
  const [infoInput, setInfoInput] = useState('');
  const [scheduleInput, setScheduleInput] = useState('');
  const [locationInput, setLocationInput] = useState('');

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

    const submittedForm = {
      "title": title,
      "jobPosition": positionInput,
      "requiredExperience": experienceInput,
      "requiredSkills": reqSkillsInput,
      "jobInfo": infoInput,
      "workSchedule": scheduleInput,
      "location": locationInput,
      "id": globalCounter.next().value,
    }
    console.log(submittedForm);

    try {
      const res = await fetch('endpoint', {
        method: 'post',
        body: JSON.stringify(submittedForm)
      })

      if (res.status === 200) {
        alert('Submission is successful!');
      } else {
        alert('Something went wrong.');
      }
    } catch (error) {
      alert('Something went wrong.');
      console.log(error);
    }
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
        <button className={styles.button} tabIndex='7'>
            Create Listing
        </button>
      </form>
    </div>
  );
}

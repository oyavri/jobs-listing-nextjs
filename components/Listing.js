import styles from '../styles/Listing.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';


export default function Listing (props) {

  const [display, setDisplay] = useState(false);

  const handleDisplay = () => {
    setDisplay(!display);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>
      <h2 className={`${styles.position} ${display ? styles.titleDisplayOpened : styles.titleDisplayClosed}`}>{props.position}</h2>
      { display && 
        <div>
          <p className={styles.experience}>
            Required Experience:
            <br/>
            {props.experience}
          </p>
          <p className={styles.reqSkills}>
            Required Skills:
            <br/>
            {props.reqSkills}
          </p>
          <p className={styles.info}>
            Job Info:
            <br/>
            {props.info}
          </p>
          <p className={styles.schedule}>
            Work Schedule:
            <br/>
            {props.schedule}
          </p>
          <p className={`${styles.location} ${display ? styles.displayOpened : styles.displayClosed}`}>
            Location:
            <br/>
            {props.location}
          </p>
        </div>
      }
      <button className={styles.button} onClick={handleDisplay}>{
        display ? 
        <FontAwesomeIcon icon={faAngleUp}/>
        : 
        <FontAwesomeIcon icon={faAngleDown}/>
      }</button>
    </div>
  );
}

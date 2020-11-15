import styles from '../styles/Header.module.css';
import Link from 'next/link';

export default function Header () {
  return(
    <div className={styles.header}>
      <Link href='/'>
        <a>
          <button className={styles.button}>Home Page</button>
        </a>
      </Link>
      <Link href='/create-job-listing'>
        <a>
          <button className={styles.button}>Create A Job Listing</button>
        </a>
      </Link>
      <Link href='/jobs-listings'>
        <a>
          <button className={styles.button}>Show Job Listings</button>
        </a>
      </Link>
    </div>
  )
}

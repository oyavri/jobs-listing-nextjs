import Header from '../components/Header';
import styles from '../styles/Layout.module.css'

export default function Layout ({ children }) {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          { children }
        </div>
      </div>
    </div>
  );
}

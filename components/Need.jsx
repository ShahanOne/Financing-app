import styles from '../styles/Need.module.css';

function Need() {
  return (
    <div className={styles.needDiv} id="needDiv">
      <p className={styles.needHeading}>The Need For FIC</p>
      <hr />
      <p className={styles.needInfo}>
        <b>financial literacy</b> among students in the present time is
        <b> extremely necessary</b>
      </p>
      <br />
      <p className={styles.needInfo}>
        The cell aims to provide a stimulus to develop financial instincts among{' '}
        <b> young minds</b> through{' '}
        <b> events, regular workshops, collaboration</b> with the industry to
        bridge the gap between <b> pedagogy</b> and <b>practice.</b>
      </p>
      <br />
      <p className={styles.needInfo}>
        In an increasingly <b> globalised economy</b>, financial knowledge is a
        need for every individual and a <b> finance & investment cell</b> would{' '}
        <b> bridge the gap</b> through learning, research work & interesting
        discussions.
      </p>
    </div>
  );
}

export default Need;
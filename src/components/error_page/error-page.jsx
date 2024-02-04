import PropTypes from 'prop-types';
import Navbar from '../header/navbar';
import styles from './error-page.module.css';

const ErrorPage = ({ error }) => {
  console.error(error);

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <h1>{
          error ?? 'There was an error. Check your internet connection and try going to the home page.'
        }</h1>
      </div>
    </>
  )
}

ErrorPage.propTypes = {
  error: PropTypes.string,
};

export default ErrorPage;

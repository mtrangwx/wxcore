import styles from './MyButton.module.css';

export function MyButton() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyButton!</h1>
    </div>
  );
}

export default MyButton;

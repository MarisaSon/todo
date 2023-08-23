import styles from './app-header.module.css'
import cx from 'classnames';

const Header = ({toDo, done}) => {
  console.log(styles);
  return (
    <div className={cx('d-flex', styles['app-header'])}>
      <h1> Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default Header;

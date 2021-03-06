import styles from './styles.module.scss';
import LogoDemo from '../../data/images/logo-demo.svg';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const ContentFooter = ({ className }) => {
  return (
    <div className={classNames(styles.footer, className)}>
      <img src={LogoDemo} width={150} alt={'Wallfair'} />
      <div className={styles.links}>
        <span>Copyright 2021 Wallfair</span>
        <Link to={'/privacy-policy'}>Imprint</Link>
        <Link to={'/terms-and-conditions'}>{'Terms & Conditions'}</Link>
      </div>
    </div>
  );
};

export default ContentFooter;

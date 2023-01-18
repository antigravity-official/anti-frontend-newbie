import { Oval } from 'react-loader-spinner';
import styles from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Oval
        height={50}
        width={50}
        color='#6b7280'
        wrapperStyle={{}}
        wrapperClass=''
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor='#6b7280'
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}

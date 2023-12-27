import {AdviceCardWidget} from 'widgets/home';
import styles from './styles.module.scss'


export const HomePage = () => {
    return (
        <div className={styles.homeWrapper}>
            <AdviceCardWidget/>
        </div>
    );
};
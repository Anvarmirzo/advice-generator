import styles from './styles.module.scss'
import {IAdvice} from 'entities/advice';
import LoaderIcon from 'shared/assets/icons/loaders/pacman-animated.svg?react';
import DiceIcon from 'shared/assets/icons/games/dice.svg?react';
import PauseIcon from 'shared/assets/icons/decors/pause.svg?react';
import cn from 'classnames';


interface IAdviceCardProps {
    data?: IAdvice | null;
    isLoading: boolean;
    onClick: () => void
}

export const AdviceCard = ({data, onClick, isLoading}: IAdviceCardProps) => {
    return (
        <article className={cn(styles.card, {
            [styles.loaderWrapper]: isLoading
        })}>
            {isLoading ? <LoaderIcon/> :
                <>
                    {data ?
                        <>
                            <span className={styles.subtitle}>advice #{data.slip.id}</span>
                            <p className={styles.title}>“{data.slip.advice}”</p>
                            <div className={styles.decor}><PauseIcon/></div>
                            <button onClick={onClick} className={styles.btn}><DiceIcon/></button>
                        </>
                        :
                        <p className={styles.title}>Something went wrong...</p>
                    }
                </>
            }
        </article>
    );
};
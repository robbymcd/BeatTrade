import styles from '../../Styles/Header/search.module.css';
import Image from 'next/image';

import search from '../../Images/search.png';

export default function Search() {
    return (
        <div className={styles.search}>
            <Image src={search} alt='Q' height={15} width={15} className={styles.icon}/>
            <input type='text' placeholder='What are you looking for?' className={styles.input}/>
        </div>
    )
}
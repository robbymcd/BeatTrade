import Link from 'next/link';

import styles from '../../Styles/Header/signinjoin.module.css';

export default function SignInJoin() {
    return (
        <div className={styles.signinjoin}>
            <Link href='/pages/signin' className={styles.signin}>Sign in</Link>
            <Link href='/pages/signin' className={styles.joinContainer}>Join</Link>
        </div>
    )
}
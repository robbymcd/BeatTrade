'use client'

import logo from '../../Images/logo.png';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import styles from '../../Styles/Header/logo.module.css';

export default function Logo() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
        console.log('clicked');
    };

    return <Image src={logo} alt="BeatTrade" height={100} width={100} onClick={handleClick} className={styles.logo}/>
}
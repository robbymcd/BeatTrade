'use client'

import styles from '../../Styles/Header/header.module.css';

import Logo from './Logo';
import Search from './Search';
import SignInJoin from './SignInJoin';
import ProfileDropdown from './ProfileDropdown';

import { useContext } from 'react';
import UserContext from '../../Store/UserContext';


export default function Header() {
    const { userData } = useContext(UserContext);

    return (
        <div className={styles.header}>
            <Logo />
            <Search />
            {userData ? <ProfileDropdown /> : <SignInJoin />}
        </div>
    );
}
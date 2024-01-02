'use client';

import type { ReactElement } from 'react';

import { auth } from '../app/firebaseConfig';

import styles from './page.module.css';

import Options from './Components/Options/Options';

export default function Home() {
  return (
    <div className={styles.home}>
      <Options />
    </div>
  )
}

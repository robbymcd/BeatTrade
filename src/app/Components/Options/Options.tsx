'use client'

import styles from '../../Styles/Options/options.module.css';

import feature from '../../Images/feature.png';
import open from '../../Images/open.png';
import vocalchain from '../../Images/vocalchain.png';
import repost from '../../Images/repost.png';
import filter from '../../Images/filter.png';
import dropdown from '../../Images/dropdown.png';
import featureBlue from '../../Images/featureBlue.png';
import openBlue from '../../Images/openBlue.png';
import vocalchainBlue from '../../Images/vocalchainBlue.png';
import repostBlue from '../../Images/repostBlue.png';
import filterGray from '../../Images/filterGray.png';

import Image from 'next/image';

export default function Options() {
    return (
        <div className={styles.options}>
            <div className={styles.optionsMain}>
                <div className={styles.serviceSelection}>
                    <div className={styles.imageContainer}>
                        <Image src={feature} alt='feature' height={30} width={30} className={styles.iconOff}/>
                        <Image src={featureBlue} alt='feature' height={30} width={30} className={styles.iconOn}/>
                    </div>
                    <p>Feature</p>
                </div>
                <div className={styles.serviceSelection}>
                    <div className={styles.imageContainer}>
                        <Image src={open} alt='open' height={30} width={30} className={styles.iconOff}/>
                        <Image src={openBlue} alt='open' height={30} width={30} className={styles.iconOn}/>
                    </div>
                    <p>Open</p>
                </div>
                <div className={styles.serviceSelection}>
                    <div className={styles.imageContainer}>
                        <Image src={vocalchain} alt='vocal chain' height={30} width={30} className={styles.iconOff}/>
                        <Image src={vocalchainBlue} alt='vocal chain' height={30} width={30} className={styles.iconOn}/>
                    </div>
                    <p>Vocal Chain</p>
                </div>
                <div className={styles.serviceSelection}>
                    <div className={styles.imageContainer}>
                        <Image src={repost} alt='repost' height={30} width={30} className={styles.iconOff}/>
                        <Image src={repostBlue} alt='repost' height={30} width={30} className={styles.iconOn}/>
                    </div>
                    <p>Repost</p>
                </div>
                <div className={styles.filters}>
                    <Image src={filter} alt='filters' height={30} width={30}/>
                    <p>Filters</p>
                </div>
            </div>
            <div className={styles.sortby}>
                <p>Sort by</p>
                <Image src={dropdown} alt='v' height={15} width={15} />
            </div>
        </div>
    );
}
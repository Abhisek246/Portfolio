import styles from './Navbar.module.css';
import { useState } from 'react';
import {getImageUrl} from '../../utils'


export const Navbar = ()=>{
    let [menuOpen, setMenuOpen] = useState(false);

    return(
        <nav className={styles.navbar}>
            <a href="/" className={styles.title}>Portfolio</a>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={menuOpen ? getImageUrl("nav/closeIcon.png") : getImageUrl("nav/menuIcon.png")} alt='menu-button' onClick={()=> setMenuOpen(!menuOpen)}></img>
                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=> setMenuOpen(false)}>
                    {/* <li><a href="#about">About</a></li> */}
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
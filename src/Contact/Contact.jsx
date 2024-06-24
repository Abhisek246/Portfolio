import styles from './Contact.module.css'
import {getImageUrl} from '../utils';

export const Contact=()=>{
    return (
        <footer id='contact' className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"></img>
                    <a href='mailto:biswasabhisek842001@gmail.com'>Email</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon"></img>
                    <a href='https://github.com/Abhisek246'>Github</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon"></img>
                    <a href='https://www.linkedin.com/in/abhisek-biswas-0825871b0/'>LinkedIn</a>
                </li>
            </ul>
        </footer>
    )
}
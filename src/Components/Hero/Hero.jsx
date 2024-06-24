import { getImageUrl } from "../../utils"
import styles from './Hero.module.css'

export const Hero = ()=> {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Abhisek Biswas</h1>
                <p className={styles.description}>I am a dedicated frontend developer with a passion for crafting
                    engaging and interactive websites. </p>
                
                <a href="mailto:biswasabhisek842001@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroimage2.png")} alt="hero image" className={styles.heroImg}></img>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    )
}
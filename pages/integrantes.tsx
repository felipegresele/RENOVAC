import felipe from "../public/integrantes/felipe.jpeg"
import john from "../public/integrantes/john.jpeg"
import arthur from "../public/integrantes/arthur.jpeg"
import git from "../public/integrantes/git.png"
import lk from "../public/integrantes/lk.png"

import styles from "./integrantes.module.css"

export default function Integrantes() {
    return (
        <div className={styles.container_integrantes}>
            <h1 className={styles.h1}>Integrantes</h1>
            <div className={styles.content}>
                <div className={styles.integrante}>
                    <img src={felipe.src} className={styles.img}/>
                    <h1>Felipe Horta Gresele | RM556955</h1>
                    <img src={lk.src} className={styles.img_icon} />https://www.linkedin.com/in/felipe-gresele-3065a72a3/
                    <img src={git.src} className={styles.img_icon} />
                    https://github.com/felipegresele
                </div>

                <div className={styles.integrante}>
                    <img src={john.src} className={styles.img}/>
                    <h1>Felipe Horta Gresele | RM556955</h1>
                    <img src={lk.src} className={styles.img_icon} />Não tem
                    <img src={git.src} className={styles.img_icon} />
                    Não tem
                </div>
            
                <div className={styles.integrante}>
                    <img src={arthur.src} className={styles.img}/>
                    <h1>Felipe Horta Gresele | RM556955</h1>
                    <img src={lk.src} className={styles.img_icon} />Não tem
                    <img src={git.src} className={styles.img_icon} />
                    Não tem
                </div>

            </div>
        </div>
    )
}
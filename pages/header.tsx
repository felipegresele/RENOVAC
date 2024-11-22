import styles from "./header.module.css"
import imgLogo from "..//public/image.png"
import imgNavio from "..//public/navio.png"
import Link from "next/link"

export default function Home() {

    return (
        <div className={styles.homeContainer}>
            <div className={styles.headerContainer}>
                <header className={styles.header}>
                    <img src={imgLogo.src} alt="Logo Ultragaz" className="img_header" />
                    <div className={styles.itemContent}>
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/compromisso" className={styles.itemLink}>Nosso Compromisso</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link href="/dicas" className={styles.itemLink}>Dicas Sustentáveis</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link href="/projetos" className={styles.itemLink}>Projetos Sustentáveis</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link href="/ajuda" className={styles.itemLink}>Quer Ajudar?</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link href="/integrantes" className={styles.linkLogin}>Integrantes</Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </header>
            </div>
            <main>
                <div className={styles.homeContainer}>
                    <div className={styles.bannerContent}>
                        <div className={styles.textSection}>
                            <h2 className={styles.subtitle}>RenovEco</h2>
                            <h1 className={styles.title}> Junta "renovável" e "eco", focando na renovação ecológica.</h1>
                            <p className={styles.description}>
                                Alimentando o Futuro com Sustentabilidade. Participe da nossa jornada rumo a uma solução energética consciente.
                                Inovamos em cada etapa para minimizar impactos e proteger o planeta para as futuras gerações.
                            </p>
                            <div className={styles.buttonContainer}>
                                <Link href="/compromisso" className={styles.primaryButton}>Veja Mais</Link>
                                <Link href="/compromisso" className={styles.secondaryButton}>Explore</Link>
                            </div>
                        </div>
                        <div className={styles.bannerImg}>
                            <img src={imgNavio.src} alt="Navio Ultragaz" />
                        </div>
                    </div>
                </div>
                <div className={styles.statContainer}>
                    <div className={styles.statItem}>
                        <div className={styles.circle}>
                            <span className={styles.percentage}>75%</span>
                        </div>
                        <p className={styles.statDescription}>Redução de Emissões</p>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.circle}>
                            <span className={styles.percentage}>50%</span>
                        </div>
                        <p className={styles.statDescription}>Uso de Energias <br />
                            Renováveis</p>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.circle}>
                            <span className={styles.percentage}>90%</span>
                        </div>
                        <p className={styles.statDescription}>Eficiência Energética</p>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.circle}>
                            <span className={styles.percentage}>65%</span>
                        </div>
                        <p className={styles.statDescription}>Adoção de <br />Tecnologias
                            Verdes</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
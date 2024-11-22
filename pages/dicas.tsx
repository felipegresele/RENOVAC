import styles from './dicas.module.css';
import Image from 'next/image';
import imgDica1 from '../public/luz.jpg';
import imgDica2 from '../public/garrafa.jpg';
import imgDica3 from '../public/corrida.jpg';

import Link from "next/link"

export default function Dicas() {
    const dicas = [
        {
            titulo: "Economize Energia em Casa",
            descricao: "Desligue aparelhos que não estão em uso e invista em lâmpadas LED para reduzir o consumo de energia.",
            imagem: imgDica1
        },
        {
            titulo: "Reduza o Uso de Plástico",
            descricao: "Substitua sacolas plásticas por sacolas reutilizáveis e evite o uso de descartáveis sempre que possível.",
            imagem: imgDica2
        },
        {
            titulo: "Aposte na Mobilidade Sustentável",
            descricao: "Prefira caminhar, pedalar ou usar transporte público em vez de veículos particulares.",
            imagem: imgDica3
        }
    ];

    return (
        <div className={styles.dicasContainer}>
        <p><Link href="/header" className={styles.link}>Voltar ao início</Link></p>
        <h1 className={styles.title}>Dicas Sustentáveis</h1>
        <p className={styles.subtitle}>Aproveite nossas sugestões para adotar práticas mais sustentáveis e contribuir para um futuro mais verde.</p>
        <div className={styles.dicasGrid}>
            {dicas.map((dica, index) => (
                <div key={index} className={styles.dicaCard}>
                    <div className={styles.imageWrapper}>
                        <Image src={dica.imagem} alt={dica.titulo} className={styles.dicaImg} />
                    </div>
                    <div className={styles.dicaContent}>
                        <h2 className={styles.dicaTitulo}>{dica.titulo}</h2>
                        <p className={styles.dicaDescricao}>{dica.descricao}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}


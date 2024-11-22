import bateria from '../public/bateria.jpg';
import painel from '../public/painel.webp';
import eolica from '../public/eolico.png';
import geometrica from '../public/geometrica.jpg';

import styles from './projetos.module.css';

export default function Projetos() {
    return (
        <div className={styles.projetos_container}>
            <h1>Projetos Sustentáveis</h1>
            <p className={styles.text_container}>
                Somos uma empresa comprometida com a inovação e a sustentabilidade, dedicada ao desenvolvimento e implementação de projetos de energia renovável que impactam positivamente o meio ambiente. Nossa expertise abrange soluções em energia solar, eólica, geotérmica e tecnologia de biogás, com o objetivo de transformar resíduos em recursos e promover uma economia circular. Com uma abordagem focada em eficiência e responsabilidade ecológica, trabalhamos para criar um futuro mais sustentável e acessível, onde a energia limpa é a base para o desenvolvimento e a qualidade de vida das comunidades.
            </p>
            <div className={styles.items_container}>
                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <img src={eolica.src} alt="Painéis Solares" />
                    </div>
                    <div className={styles.item_texto}>
                        <h1 className={styles.titulo_item}>
                            Parques Eólicos Offshore
                        </h1>
                        <p className={styles.descricao_item}>
                            Instalação de painéis solares em residências e comunidades para geração de energia limpa e redução de custos de eletricidade. Além de promover energia renovável, este projeto pode incluir programas de incentivo para famílias de baixa renda e workshops sobre eficiência energética.
                        </p>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.item_texto}>
                        <h1 className={styles.titulo_item}>
                            Sistemas de Energia Geotérmica
                        </h1>
                        <p className={styles.descricao_item}>
                        Desenvolvimento de turbinas eólicas em alto-mar que aproveitam ventos mais fortes e constantes. Estes projetos têm um impacto ambiental menor em comparação com parques eólicos terrestres e podem fornecer grandes quantidades de energia limpa para cidades costeiras.
                        </p>
                    </div>
                    <div className={styles.item_img}>
                        <img src={geometrica.src} alt="Sistemas de Energia Geotérmica" />
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.item_img}>
                        <img src={painel.src} alt="Parques Eólicos Offshore" />
                    </div>
                    <div className={styles.item_texto}>
                        <h1 className={styles.titulo_item}>
                        Painéis Solares Residenciais e Comunitários 
                        </h1>
                        <p className={styles.descricao_item}>
                            Instalação de painéis solares em residências e comunidades para geração de energia limpa e redução de custos de eletricidade. Além de promover energia renovável, este projeto pode incluir programas de incentivo para famílias de baixa renda e workshops sobre eficiência energética.
                        </p>
                    </div>
                </div>

                <div className={styles.item}>
                    <div className={styles.item_texto}>
                        <h1 className={styles.titulo_item}>
                            Iluminação Pública com Energia Solar e Armazenamento de Baterias
                        </h1>
                        <p className={styles.descricao_item}>
                            Instalação de postes de luz que utilizam painéis solares e sistemas de armazenamento de baterias para manter a iluminação durante a noite. Além de economizar energia, esses postes de luz funcionam mesmo em casos de falta de eletricidade e contribuem para a segurança pública.
                        </p>
                    </div>
                    <div className={styles.item_img}>
                        <img src={bateria.src} alt="Iluminação Pública" />
                    </div>
                </div>
            </div>
        </div>
    );
}

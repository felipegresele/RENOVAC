import styles from './compromisso.module.css';
import Link from "next/link"

import { HiArrowSmallRight } from "react-icons/hi2";

import banner from "../public/banner_energia.webp"
import item_eolica from "../public/icon_energia.png"
import item_solar from "../public/icon_solar.png"
import item_energia from "../public/icon_carregador.png"

const Compromisso = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.img_content}>
          <img src={banner.src} className={styles.img} />
        </div>
        <div className={styles.text_content}>
          <h1 className={styles.title}>
            Nosso Compromisso
            <br /><span>
              RENOVEC</span>
          </h1>
          <p className={styles.description}>
          Comprometidos com um futuro sustentável, este projeto fictício apresenta soluções inovadoras em energia renovável – abrangendo solar, eólica, geotérmica e biogás – além de estratégias de economia circular, transformando resíduos em recursos e promovendo impactos positivos no meio ambiente e na qualidade de vida das comunidades. A proposta está estruturada em quatro pilares principais, que integram tecnologia, eficiência e responsabilidade socioambiental
          </p>
          <Link href="/projetos" className={styles.btn}>Ver mais</Link>
        </div>
      </div>

      <div className={styles.cart}>

        <div className={styles.cart_item}>
          <img src={item_eolica.src} className={styles.img_item} />
          <h1>
          Parques Eólicos Offshore
          </h1>
          <p className={styles.desp_item}>
          Desenvolvimento de turbinas eólicas em alto-mar que aproveitam ventos mais fortes e constantes
          </p>
          <Link href="/projetos" className={styles.btn_item}>Veja mais
          <span> <HiArrowSmallRight /></span></Link>
        </div>

        <div className={styles.cart_item}>
          <img src={item_solar.src} className={styles.img_item} />
          <h1>
          Painéis Solares Residenciais
          </h1>
          <p className={styles.desp_item}>
          Instalação de painéis solares em residências e comunidades
          </p>
          <Link href="/projetos" className={styles.btn_item}>Veja mais
          <span> <HiArrowSmallRight /></span></Link>
        </div>

        <div className={styles.cart_item}>
          <img src={item_energia.src} className={styles.img_item} />
          <h1>
          Armazenamento de Baterias
          </h1>
          <p className={styles.desp_item}>
          Instalação de postes de luz que utilizam painéis solares e sistemas de armazenamento de baterias
          </p>
          <Link href="/projetos" className={styles.btn_item}>Veja mais
            <span><HiArrowSmallRight /></span></Link>
        </div>

        <div className={styles.texto_container}>
          <h1>O que somos?</h1>
          <p>Nosso compromisso é ser um agente ativo na construção de um futuro sustentável. Acreditamos que a inovação e a responsabilidade ambiental são essenciais para enfrentar os desafios energéticos do mundo de hoje. Por isso, dedicamos nossa expertise e recursos ao desenvolvimento de projetos que aproveitam o potencial das energias renováveis, como solar, eólica, geotérmica e biogás, transformando resíduos em recursos valiosos para uma economia circular.

            Cada solução que oferecemos reflete nosso compromisso com a eficiência energética e a preservação ambiental, visando tornar a energia limpa acessível e contribuir para a qualidade de vida das comunidades que atendemos. Trabalhamos com o objetivo de proporcionar um impacto positivo e duradouro no meio ambiente, promovendo o uso consciente de recursos e um modelo de desenvolvimento sustentável para as gerações futuras.</p>
        </div>

      </div>

    </div>


  );
};

export default Compromisso;
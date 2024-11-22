// pages/index.tsx
import Link from "next/link"
import { useState } from "react";
import styles from "./cadastro.module.css"; // Importando o arquivo de CSS
import img from "../public/banner.png"

const Home = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Envia os dados para o back-end Flask
    const res = await fetch("http://localhost:5000/adicionar_cliente", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email }),
    });

    const data = await res.json();

    if (data.success) {
      setMessage("Cliente cadastrado com sucesso!");
      setNome("");
      setEmail("");
    } else {
      setMessage("Erro ao cadastrar cliente.");
    }
  };

  return (
    <div className={styles.container}>
        <div className={styles.img_content}>
            <img src={img.src} className={styles.img} />
        </div>
    <div className={styles.container_cadastro}>
      <h2 className={styles.h2}>Cadastro de Clientes</h2>

      {message && <div className={styles.alert}>{message}</div>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.input_group}>
          <label htmlFor="nome" className={styles.form_label}>Nome</label>
          <input
            type="text"
            className={styles.form_control}
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div className={styles.input_group}>
          <label htmlFor="email" className={styles.form_label}>E-mail</label>
          <input
            type="email"
            className={styles.form_control}
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Link href="/header" className={styles.submit_link}>
          Cadastrar
        </Link>
      </form>
      </div>
    </div>
  );
};

export default Home;
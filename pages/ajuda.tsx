import { useState } from 'react';
import styles from './ajuda.module.css'; // Importando o CSS

export default function Formulario() {
  // Estado para os campos do formulário
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [erro, setErro] = useState(false); // Definindo o estado 'erro'

  const [feedback, setFeedback] = useState('');
  const [feedbackEnviado, setFeedbackEnviado] = useState(false);

  // Função para buscar o endereço a partir do CEP
  const buscarEndereco = async () => {
    const cepFormatado = cep.replace("-", ""); // Remover o traço do CEP
  
    if (cepFormatado.length === 8) { // Verificando se o CEP tem o tamanho correto
      try {
        const res = await fetch(`https://viacep.com.br/ws/${cepFormatado}/json/`);
        const data = await res.json();
  
        if (data.erro) {
          setErro(true);
          alert("CEP não encontrado");
        } else {
          setErro(false);
          setLogradouro(data.logradouro || "");
          setBairro(data.bairro || '');
          setCidade(data.localidade || '');
          setEstado(data.uf || '');
        }
      } catch (error) {
        setErro(true);
        alert("Erro ao buscar o CEP. Tente novamente.");
      }
    } else {
      alert("CEP inválido!");
    }
  };

   const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
    setLogradouro('');
    setBairro('');
    setCidade('');
    setEstado('');
    setErro(false); // Resetando o erro ao alterar o CEP
  }
  

  //enviar feedback
  const handleFeedbackChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedback(e.target.value)
  }

  const enviarFeedback = () => {
    if(feedback.trim()) {
      setFeedbackEnviado(true);
      setFeedback('');
    } else {
      alert("Por favor, forneça um feedback")
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.formulario}>
        <h1 className={styles.titulo}>Consulta de Endereço</h1>
        <form className={styles.form}>
          <div>
            <label htmlFor="cep" className={styles.label}>CEP:</label>
            <input
              type="text"
              id="cep"
              value={cep}
              onChange={handleCepChange}
              maxLength={9} // Permite um máximo de 9 caracteres (com o traço)
              placeholder="Digite o CEP"
              required
              className={styles.input}
            />
          </div>
          <button
            type="button"
            onClick={buscarEndereco}
            className={styles.botao}
          >
            Buscar Endereço
          </button>

          <div>
            <label htmlFor="logradouro" className={styles.label}>Logradouro:</label>
            <input
              type="text"
              id="logradouro"
              value={logradouro}
              readOnly
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="bairro" className={styles.label}>Bairro:</label>
            <input
              type="text"
              id="bairro"
              value={bairro}
              readOnly
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="cidade" className={styles.label}>Cidade:</label>
            <input
              type="text"
              id="cidade"
              value={cidade}
              readOnly
              className={styles.input}
            />
          </div>
          <div>
            <label htmlFor="estado" className={styles.label}>Estado:</label>
            <input
              type="text"
              id="estado"
              value={estado}
              readOnly
              className={styles.input}
            />
          </div>
        </form>

        {erro && <p className={styles.mensagemErro}>Erro ao buscar o CEP. Tente novamente.</p>}

        <div className={styles.feedbackContainer}>
          <label htmlFor="feedback" className={styles.label}>O que você da nossa emprega?</label>
          <textarea id="feedback" value={feedback} onChange={handleFeedbackChange} placeholder='Digite seu feedback aqui' className={styles.textarea}>
          </textarea>
          <button type='button' onClick={enviarFeedback} className={styles.botaoFeedback}>Enviar Feedback</button>

          {feedbackEnviado && <p className={styles.mensagemAgradecimento}>Obrigado pelo seu feedback!</p>}
        </div>
      </div>
    </div>
  );
}

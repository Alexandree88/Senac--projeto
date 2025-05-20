import { useState, type FormEvent } from "react";
import styles from "./RegisterPage.module.css";

function RegisterPage() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErro(null);

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    console.log("Usuário registrado:", { nome, email });
    alert("Cadastro realizado com sucesso!");
    setNome("");
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.titulo}>Cadastro de Usuário</h2>

        {erro && <div className={styles.erro}>{erro}</div>}

        <div className={styles.grupo}>
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className={styles.grupo}>
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.grupo}>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <div className={styles.grupo}>
          <label htmlFor="confirmar">Confirmar Senha</label>
          <input
            type="password"
            id="confirmar"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.botao}>
          Registrar
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
import React, { useState, type FormEvent } from "react";
import styles from "./LoginPage.module.css";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent"
import { useAuth } from "../../contexts/AuthContext"


const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch(
        "https://senac-eventos-cultural-backend-production.up.railway.app/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Falha no login");
      }
      const { token } = await res.json();
      login(token)
      window.location.href = "/"

    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        alert(`Erro ao logar: ${err.message}`);
      } else {
        const erroMsg = String(err);
        setError(erroMsg);
        alert(`Erro ao logar: ${erroMsg}`);
      }
    }
  };

  return (
    <div className={styles.login}>
      <form onSubmit={handleSubmit}>
        <div>
          <label className={styles.email}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className={styles.senha}>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
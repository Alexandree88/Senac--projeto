import styles from './LoginPage.module.css'

function LoginPage (){
    return (
        <div className={styles.login}>
            <div>
                <label className={styles.email}>email</label>
                <input type="Email" />
            </div>
            
            <div>         
                <label className={styles.senha}>senha</label>
                <input type="senha" />
            </div>

            <button>Entrar</button>
        </div>
 
    )
}

export default LoginPage
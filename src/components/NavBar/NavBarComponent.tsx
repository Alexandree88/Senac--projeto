






return (
    <nav className={stylesheet.menu}>
        <div className={styles.logo}>Logo</div>

        <div className={styles['nav-links']}>
          {user ? (
            <>
            <Link to="/eventos">Eventos</Link>
            <Link to="/meuseventos">Meus Eventos</Link>
            {UserActivation.role === 'organizar'&& (
                <Link to="/painel-eventos">Painel de Eventos</Link>
            )}
            <button onClick={onclick}>Sair</button>
            </>
          ) : (
            <> 
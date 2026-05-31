const Header = () => {
    return (
      <nav style={styles.navBar}>
        <a href="#" style={styles.logo}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill={theme.neonCyan} xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          B2Tech
        </a>
        <ul style={styles.navLinks}>
          <li><a href="#soluciones" style={styles.navLinkItem}>Soporte</a></li>
          <li><a href="#socios" style={styles.navLinkItem}>Socios</a></li>
          <li><a href="#contacto" style={styles.navLinkItem}>Contacto</a></li>
        </ul>
      </nav>
    );
};

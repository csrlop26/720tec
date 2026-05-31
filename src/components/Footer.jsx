const Footer = () => {
    return (
      <footer style={styles.footer}>
        <h2 style={{ color: theme.neonCyan, marginBottom: '1rem', letterSpacing: '2px' }}>B2TECH</h2>
        <p style={{ maxWidth: '400px', margin: '0 auto 2rem auto' }}>El motor computacional y la infraestructura que confían las industrias modernas.</p>
        <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>© 2026 B2Tech. Todos los derechos reservados.</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem', fontSize: '0.8rem' }}>
          <a href="#" style={{ color: theme.textBody, textDecoration: 'none' }}>Política de Privacidad</a>
          <a href="#" style={{ color: theme.textBody, textDecoration: 'none' }}>Aviso Legal</a>
        </div>
      </footer>
    );
};

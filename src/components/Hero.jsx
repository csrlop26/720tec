const Hero = () => {
    return (
        <motion.section
          style={styles.heroSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={styles.heroBadge}>99.98% Uptime Industrial</div>
          <h1 style={styles.heroTitle}>Ingeniería Cloud & Industrial Tech Solutions</h1>
          <p style={styles.heroSubtitle}>
            Transformamos los retos empresariales en soluciones tecnológicas de alto rendimiento. Infraestructuras cibernéticas seguras, IoT industrial y analítica avanzada para líderes del sector B2B.
          </p>
          <GlowingButton text="Iniciar Consulta Técnica" />
        </motion.section>
    );
};

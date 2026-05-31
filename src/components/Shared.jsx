const GlowingButton = ({ text }) => {
  return (
    <motion.button
      style={styles.ctaButton}
      whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${theme.neonCyan}` }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );
};

const ServiceCard = ({ title, desc, icon }) => {
  return (
    <motion.div
      style={styles.serviceCard}
      whileHover={{
        y: -10,
        background: theme.surfaceHigh,
        boxShadow: `0 10px 30px rgba(0, 245, 255, 0.1)`,
        borderColor: theme.neonCyan
      }}
    >
      <div style={styles.cardIcon}>{icon}</div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={{ lineHeight: '1.6' }}>{desc}</p>
    </motion.div>
  );
};

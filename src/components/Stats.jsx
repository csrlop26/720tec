const stats = [
  { value: '99.98%', label: 'Uptime garantizado', suffix: '' },
  { value: '12+', label: 'Años de experiencia', suffix: '' },
  { value: '200+', label: 'Proyectos industriales', suffix: '' },
  { value: '<24h', label: 'Respuesta técnica', suffix: '' },
];

const Stats = () => {
  return (
    <section id="stats" style={{
      padding: '4rem 0 6rem 0',
      position: 'relative',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '1.5rem',
      }}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              background: theme.glassBg,
              backdropFilter: 'blur(12px)',
              border: `1px solid ${theme.glassBorder}`,
              borderRadius: '16px',
              padding: '2rem 1.5rem',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top accent line */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${theme.neonCyan}, transparent)`,
            }} />
            <div style={{
              fontSize: '2.8rem',
              fontWeight: '700',
              color: theme.neonCyan,
              lineHeight: 1,
              marginBottom: '0.75rem',
              letterSpacing: '-1px',
            }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: '0.85rem',
              color: theme.textBody,
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

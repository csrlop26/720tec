const partners = [
  {
    name: 'Microsoft Azure',
    category: 'Cloud Partner',
    desc: 'Proveedor oficial certificado para infraestructura cloud empresarial.',
    logoPath: 'M 4 4 L 12 4 L 12 12 L 4 12 Z M 13 4 L 21 4 L 21 12 L 13 12 Z M 4 13 L 12 13 L 12 21 L 4 21 Z M 13 13 L 21 13 L 21 21 L 13 21 Z',
  },
  {
    name: 'Cisco Systems',
    category: 'Network Partner',
    desc: 'Integración certificada de soluciones de red y seguridad empresarial.',
    logoPath: 'M 12 3 C 7.03 3 3 7.03 3 12 C 3 16.97 7.03 21 12 21 C 16.97 21 21 16.97 21 12 C 21 7.03 16.97 3 12 3 Z M 12 7 C 14.76 7 17 9.24 17 12 C 17 14.76 14.76 17 12 17 C 9.24 17 7 14.76 7 12 C 7 9.24 9.24 7 12 7 Z M 12 9 C 10.34 9 9 10.34 9 12 C 9 13.66 10.34 15 12 15 C 13.66 15 15 13.66 15 12 C 15 10.34 13.66 9 12 9 Z',
  },
  {
    name: 'Siemens OT',
    category: 'Industrial Partner',
    desc: 'Alianza estratégica para automatización y control de procesos industriales.',
    logoPath: 'M 3 12 L 21 12 M 12 3 L 12 21 M 6 6 L 18 18 M 18 6 L 6 18',
  },
  {
    name: 'Fortinet',
    category: 'Security Partner',
    desc: 'Soluciones de ciberseguridad OT/IT convergente para entornos críticos.',
    logoPath: 'M 12 3 L 20 7 L 20 12 C 20 16.42 16.42 20.5 12 21 C 7.58 20.5 4 16.42 4 12 L 4 7 Z',
  },
  {
    name: 'VMware',
    category: 'Virtualization Partner',
    desc: 'Infraestructura virtualizada y entornos de alta disponibilidad certificados.',
    logoPath: 'M 3 6 L 3 18 L 21 18 L 21 6 Z M 7 10 L 10 14 L 12 11 L 14 14 L 17 10',
  },
  {
    name: 'AWS',
    category: 'Cloud Partner',
    desc: 'Partner oficial en soluciones cloud escalables y servicios gestionados.',
    logoPath: 'M 4 14 C 4 14 6 16 12 16 C 18 16 20 14 20 14 M 8 10 C 8 10 8 8 12 8 C 16 8 16 10 16 10 M 12 4 L 12 20',
  },
];

// SVG icon for partner card
const PartnerLogoIcon = ({ path, color }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
  </svg>
);

const Partners = () => {
  return (
    <section id="socios" style={{ padding: '6rem 0', borderTop: `1px solid ${theme.glassBorder}` }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <div style={{
          display: 'inline-block',
          background: 'rgba(0, 245, 255, 0.08)',
          border: `1px solid ${theme.glassBorder}`,
          color: theme.neonCyan,
          padding: '0.4rem 1.2rem',
          borderRadius: '20px',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '1.5rem',
        }}>
          Alianzas Tecnológicas
        </div>
        <h2 style={styles.sectionTitle}>Nuestros Socios Estratégicos</h2>
        <p style={{
          color: theme.textBody,
          fontSize: '1.1rem',
          maxWidth: '560px',
          margin: '0 auto',
          lineHeight: '1.7',
          marginTop: '-2rem',
        }}>
          Trabajamos con los líderes globales de la tecnología para ofrecerte soluciones certificadas y de máximo rendimiento.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
      }}>
        {partners.map((partner, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{
              y: -6,
              background: theme.surfaceHigh,
              boxShadow: `0 12px 30px rgba(0, 245, 255, 0.08)`,
              borderColor: theme.neonCyan,
            }}
            style={{
              background: theme.surfaceLow,
              border: `1px solid ${theme.glassBorder}`,
              borderRadius: '16px',
              padding: '2rem',
              cursor: 'default',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '52px', height: '52px',
                background: 'rgba(0, 245, 255, 0.06)',
                border: `1px solid ${theme.glassBorder}`,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <PartnerLogoIcon path={partner.logoPath} color={theme.neonCyan} />
              </div>
              <div>
                <div style={{ color: theme.textHigh, fontWeight: '600', fontSize: '1rem' }}>
                  {partner.name}
                </div>
                <div style={{
                  color: theme.neonCyan,
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  opacity: 0.8,
                }}>
                  {partner.category}
                </div>
              </div>
            </div>
            <p style={{ color: theme.textBody, fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              {partner.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

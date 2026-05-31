const Contact = () => {
    return (
        <section id="contacto" style={styles.contactSection}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '3rem', color: theme.textHigh, marginBottom: '1.5rem', letterSpacing: '-1px' }}>Inicia tu Proyecto</h2>
            <p style={{ marginBottom: '3rem' }}>
              Para infraestructura arquitectónica o automatización a gran escala, estamos listos. Háblanos de tu reto industrial.
            </p>
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: theme.textHigh, fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <PhoneIcon size={20} color={theme.neonCyan} /> 964 066 964
              </h4>
              <p>Castelló de la Plana, España</p>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: theme.textHigh, fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                <MailIcon size={20} color={theme.neonCyan} /> info@b2tech.es
              </h4>
              <p>Respuesta técnica garantizada en menos de 24h.</p>
            </div>
          </motion.div>

          <motion.form
            style={{ padding: '3rem', background: theme.glassBg, backdropFilter: 'blur(10px)', border: `1px solid ${theme.glassBorder}`, borderRadius: '20px' }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <input type="text" placeholder="Tu Nombre / Empresa" style={styles.input} />
            <input type="email" placeholder="Correo Electrónico (Corporativo)" style={styles.input} />
            <input type="text" placeholder="Teléfono" style={styles.input} />
            <textarea placeholder="Cuéntanos más sobre el problema a resolver..." style={{ ...styles.input, height: '100px', resize: 'none' }}></textarea>

            <div style={{ marginTop: '1rem' }}>
              <GlowingButton text="Enviar Solicitud Segura" />
            </div>
          </motion.form>
        </section>
    );
};

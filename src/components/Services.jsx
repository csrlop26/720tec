const Services = () => {
    return (
        <section id="soluciones">
          <motion.h2
            style={styles.sectionTitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Nuestras Áreas de Experiencia
          </motion.h2>

          <div style={styles.servicesGrid}>
            <ServiceCard
              icon={<CloudIcon size={40} strokeWidth={1.5} />}
              title="Soluciones Cloud"
              desc="Infraestructuras en la nube escalables, Disaster Recovery y arquitecturas de alta disponibilidad."
            />
            <ServiceCard
              icon={<CpuIcon size={40} strokeWidth={1.5} />}
              title="Industrial Tech & IoT"
              desc="Ecosistemas de manufactura inteligente, sensorización y equipos embarcados para la industria pesada."
            />
            <ServiceCard
              icon={<RadioIcon size={40} strokeWidth={1.5} />}
              title="Infraestructura"
              desc="Diseño y mantenimiento predictivo de redes WiFi LTE, seguridad OT y comunicaciones críticas."
            />
            <ServiceCard
              icon={<BrainIcon size={40} strokeWidth={1.5} />}
              title="Analítica Avanzada"
              desc="Transformamos tus datos operativos en inteligencia accionable, integrando IA y automatización."
            />
          </div>
        </section>
    );
};

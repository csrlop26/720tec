import { motion } from 'framer-motion';
import { T } from '../tokens';
import { IconCloud, IconCpu, IconRadio, IconBrain } from '../icons';
import { Badge, GlowBtn } from './Primitives';

const services = [
  {
    icon: <IconCloud s={36} c={T.cyan} />,
    title: 'Servicios y soluciones en la nube',
    short: 'Infraestructura cloud empresarial de alta disponibilidad.',
    tags: ['Computación', 'Backup / DR', 'Zimbra / Carbonio', 'B2Correo', 'Telemetría', 'Seguridad'],
    detail: ['Arquitecturas multi-cloud y hybrid-cloud', 'Disaster Recovery y Business Continuity', 'Servicio propio de correo corporativo B2Correo', 'Kubernetes, contenedores y microservicios', 'Migración y modernización de aplicaciones'],
  },
  {
    icon: <IconCpu s={36} c={T.cyan} />,
    title: 'Soluciones tecnológicas para la industria',
    short: 'Ecosistemas inteligentes para la industria pesada y el sector OT.',
    tags: ['Infraestructuras WiFi', 'Equipamiento embarcado', 'Gestión de equipamiento', 'Seguridad OT'],
    detail: ['Plataformas IIoT y sensorización industrial', 'Integración SCADA / PLC / MES', 'Edge computing y equipamiento embarcado', 'Gemelos digitales y mantenimiento predictivo', 'Protocolos industriales: OPC-UA, Modbus, MQTT'],
  },
  {
    icon: <IconRadio s={36} c={T.cyan} />,
    title: 'Diseño, provisión y mantenimiento de infraestructuras',
    short: 'Redes críticas diseñadas para entornos exigentes.',
    tags: ['Virtualización', 'Almacenamiento', 'Backup', 'Comunicaciones WiFi LTE', 'Seguridad IT'],
    detail: ['Diseño y despliegue WiFi 6 / LTE privada', 'SD-WAN y segmentación de red OT/IT', 'Virtualización y almacenamiento empresarial', 'Monitorización NOC 24/7', 'Auditorías y remediación de vulnerabilidades'],
  },
  {
    icon: <IconBrain s={36} c={T.cyan} />,
    title: 'Desarrollo de proyectos especiales',
    short: 'Datos operativos convertidos en inteligencia accionable.',
    tags: ['Sensorización de entornos', 'Analítica avanzada', 'Explotación del dato', 'Automatización de procesos'],
    detail: ['Pipelines de datos industriales en tiempo real', 'Visión artificial aplicada a procesos industriales', 'Machine Learning y detección de anomalías', 'Dashboards de operaciones (OEE, KPIs)', 'Integración con ERPs y sistemas de negocio'],
  },
];

export const PanelServicios = ({ onContact }) => (
  <div className="panel-inner" style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2.5rem 6rem' }}>
    <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
      <Badge>Nuestros Servicios</Badge>
      <h1 className="panel-h1" style={{ fontSize:'clamp(2.4rem, 6vw, 3.5rem)', color:T.hi, fontWeight:700, lineHeight:1.1, letterSpacing:'-0.03em', marginBottom:'1rem', maxWidth:'760px' }}>
        Tecnología que trabaja<br/>para tu operación
      </h1>
      <p style={{ fontSize:'1.1rem', color:T.mid, lineHeight:1.8, maxWidth:'580px', marginBottom:'4rem' }}>
        Cuatro áreas de especialización que cubren el ciclo completo de la transformación digital industrial.
      </p>
    </motion.div>

    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px,1fr))', gap:'1.5rem', marginBottom:'4rem' }}>
      {services.map((s, i) => (
        <motion.div key={i}
          initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1+i*0.1 }}
          whileHover={{ y:-6, borderColor:T.cyanBorderHv }}
          style={{ background:T.surface1, border:`1px solid ${T.cyanBorder}`, borderRadius:'18px', padding:'2.5rem 2rem', position:'relative', overflow:'hidden', transition:'all 0.25s ease', display:'flex', flexDirection:'column', gap:'1rem' }}>
          <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:`linear-gradient(90deg, transparent, ${T.cyan}90, transparent)` }} />

          <div>{s.icon}</div>
          <h3 style={{ fontSize:'1.1rem', color:T.hi, fontWeight:600, lineHeight:1.3 }}>{s.title}</h3>
          <p style={{ color:T.mid, fontSize:'0.9rem', lineHeight:1.6, margin:0 }}>{s.short}</p>

          {/* Real service tags */}
          <div style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem' }}>
            {s.tags.map((tag, j) => (
              <span key={j} style={{
                background:'rgba(0,245,255,0.06)', border:`1px solid ${T.cyanBorder}`,
                color:T.low, padding:'0.2rem 0.65rem', borderRadius:'100px', fontSize:'0.72rem',
              }}>{tag}</span>
            ))}
          </div>

          <ul style={{ listStyle:'none', padding:0, margin:0, borderTop:`1px solid ${T.cyanBorder}`, paddingTop:'1rem' }}>
            {s.detail.map((d, j) => (
              <li key={j} style={{ display:'flex', gap:'0.6rem', marginBottom:'0.5rem', fontSize:'0.85rem', color:T.mid }}>
                <span style={{ color:T.cyan, flexShrink:0 }}>›</span>{d}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>

    <div style={{ textAlign: 'center' }}>
      <GlowBtn onClick={onContact}>Solicitar propuesta técnica</GlowBtn>
    </div>
  </div>
);

import { motion } from 'framer-motion';
import { T } from '../tokens';
import { LogoAzure, LogoCisco, LogoSiemens, LogoFortinet, LogoVMware, LogoAWS } from '../icons';
import { Badge } from './Primitives';

const partners = [
  {
    Logo: LogoAzure,
    name: 'Microsoft Azure', cat: 'Cloud Partner',
    desc: 'Proveedor certificado para infraestructuras Azure empresariales, DevOps y soluciones híbridas.',
  },
  {
    Logo: LogoCisco,
    name: 'Cisco Systems', cat: 'Network Partner',
    desc: 'Integrador oficial de soluciones de red, SD-WAN, seguridad y colaboración empresarial.',
  },
  {
    Logo: LogoSiemens,
    name: 'Siemens OT', cat: 'Industrial Partner',
    desc: 'Alianza estratégica para automatización, control industrial y gestión de activos de planta.',
  },
  {
    Logo: LogoFortinet,
    name: 'Fortinet', cat: 'Security Partner',
    desc: 'Ciberseguridad OT/IT convergente: FortiGate, FortiNAC y protección de infraestructuras críticas.',
  },
  {
    Logo: LogoVMware,
    name: 'VMware', cat: 'Virtualization Partner',
    desc: 'Infraestructuras vSphere, vSAN y NSX para entornos virtualizados de alta disponibilidad.',
  },
  {
    Logo: LogoAWS,
    name: 'Amazon AWS', cat: 'Cloud Partner',
    desc: 'Partner para AWS: arquitectura serverless, EKS, RDS y servicios gestionados en producción.',
  },
];

export const PanelSocios = () => (
  <div className="panel-inner" style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2.5rem 6rem' }}>
    <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
      <Badge>Alianzas Estratégicas</Badge>
      <h1 className="panel-h1" style={{ fontSize:'clamp(2.4rem, 6vw, 3.5rem)', color:T.hi, fontWeight:700, lineHeight:1.1, letterSpacing:'-0.03em', marginBottom:'1rem', maxWidth:'700px' }}>
        Respaldados por los<br/>líderes tecnológicos
      </h1>
      <p style={{ fontSize:'1.1rem', color:T.mid, lineHeight:1.8, maxWidth:'580px', marginBottom:'4rem' }}>
        Trabajar con B2Tech significa acceder a un ecosistema de partners certificados que garantizan las mejores soluciones del mercado.
      </p>
    </motion.div>

    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px,1fr))', gap:'1.5rem' }}>
      {partners.map((p, i) => (
        <motion.div key={i}
          initial={{ opacity:0, scale:0.96 }} animate={{ opacity:1, scale:1 }} transition={{ delay:0.07*i }}
          whileHover={{ y:-5, borderColor:T.cyanBorderHv, boxShadow:`0 8px 32px rgba(0,245,255,0.08)` }}
          style={{
            background: T.surface1,
            border: `1px solid ${T.cyanBorder}`,
            borderRadius: '12px', padding: '2rem',
            display: 'flex', flexDirection: 'column', gap: '1.25rem',
            transition: 'all 0.25s ease',
            position: 'relative', overflow: 'hidden',
          }}
        >
          {/* Subtle top accent */}
          <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:`linear-gradient(90deg, transparent, ${T.cyan}60, transparent)` }} />

          {/* Logo + name row */}
          <div style={{ display:'flex', alignItems:'center', gap:'1.25rem' }}>
            <div style={{
              width:'60px', height:'60px', flexShrink:0,
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${T.cyanBorder}`,
              borderRadius: '10px',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <p.Logo s={36} />
            </div>
            <div>
              <div style={{ color:T.hi, fontWeight:600, fontSize:'1rem', marginBottom:'0.2rem' }}>{p.name}</div>
              <span style={{
                display:'inline-block',
                background:'rgba(0,245,255,0.07)', border:`1px solid ${T.cyanBorder}`,
                color:T.cyan, padding:'0.15rem 0.65rem', borderRadius:'3px',
                fontSize:'0.65rem', textTransform:'uppercase', letterSpacing:'1.5px',
              }}>{p.cat}</span>
            </div>
          </div>

          <p style={{ color:T.mid, fontSize:'0.88rem', lineHeight:1.7, margin:0 }}>{p.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

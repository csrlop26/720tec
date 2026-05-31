import { motion } from 'framer-motion';
import { T } from '../tokens';
import { IconShield, IconUsers, IconTarget, IconBrain, IconBuilding } from '../icons';
import { Badge } from './Primitives';

const values = [
  { icon: <IconTarget s={28} c={T.cyan} />, title: 'Precisión Industrial', desc: 'Cada solución que desplegamos está calibrada para los estándares más exigentes del sector industrial y crítico.' },
  { icon: <IconShield s={28} c={T.cyan} />, title: 'Seguridad por Diseño', desc: 'La ciberseguridad OT/IT no es un añadido: es el fundamento de cada arquitectura que planificamos.' },
  { icon: <IconUsers  s={28} c={T.cyan} />, title: 'Equipo Especializado', desc: 'Ingenieros certificados en cloud, redes industriales y automatización con más de 12 años de experiencia media.' },
  { icon: <IconBrain  s={28} c={T.cyan} />, title: 'Innovación Continua',  desc: 'Integramos IA y analítica avanzada para mantener a nuestros clientes siempre un paso adelante del mercado.' },
];

export const PanelNosotros = () => (
  <div className="panel-inner" style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 2.5rem 6rem' }}>
    <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
      <Badge>Sobre Nosotros</Badge>
      <h1 className="panel-h1" style={{ fontSize:'clamp(2.4rem, 6vw, 3.5rem)', color:T.hi, fontWeight:700, lineHeight:1.1, letterSpacing:'-0.03em', marginBottom:'1.5rem', maxWidth:'700px' }}>
        La ingeniería que mueve<br/>la industria moderna
      </h1>
      <p style={{ fontSize:'1.15rem', color:T.mid, lineHeight:1.8, maxWidth:'620px', marginBottom:'4rem' }}>
        B2Tech nace en Castelló de la Plana con una misión clara: dotar a las empresas industriales de la infraestructura tecnológica que merecen. Combinamos cloud, IoT, redes y analítica de datos en soluciones cohesivas y de alto rendimiento.
      </p>
    </motion.div>

    {/* Stats */}
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px,1fr))', gap:'1.2rem', marginBottom:'5rem' }}>
      {[
        { v:'99.98%', l:'Uptime garantizado'   },
        { v:'12+',    l:'Años de experiencia'   },
        { v:'200+',   l:'Proyectos completados' },
        { v:'<24h',   l:'Respuesta técnica'     },
      ].map((s, i) => (
        <motion.div key={i}
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1+i*0.1 }}
          style={{ background:T.surface1, border:`1px solid ${T.cyanBorder}`, borderRadius:'14px', padding:'1.75rem 1.5rem', textAlign:'center', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(90deg, transparent, ${T.cyan}, transparent)` }} />
          <div style={{ fontSize:'2.4rem', fontWeight:700, color:T.cyan, letterSpacing:'-2px', lineHeight:1 }}>{s.v}</div>
          <div style={{ fontSize:'0.78rem', color:T.mid, textTransform:'uppercase', letterSpacing:'1px', marginTop:'0.6rem' }}>{s.l}</div>
        </motion.div>
      ))}
    </div>

    {/* Values */}
    <h2 style={{ fontSize:'clamp(1.4rem, 4vw, 1.8rem)', color:T.hi, fontWeight:600, marginBottom:'2rem' }}>Nuestros valores</h2>
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px,1fr))', gap:'1.5rem', marginBottom:'4rem' }}>
      {values.map((v, i) => (
        <motion.div key={i}
          initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2+i*0.08 }}
          whileHover={{ background:T.surface2, borderColor:T.cyanBorderHv, y:-4 }}
          style={{ background:T.surface1, border:`1px solid ${T.cyanBorder}`, borderRadius:'16px', padding:'2rem', transition:'all 0.25s ease' }}>
          <div style={{ marginBottom:'1rem' }}>{v.icon}</div>
          <h3 style={{ color:T.hi, fontSize:'1.05rem', fontWeight:600, marginBottom:'0.75rem' }}>{v.title}</h3>
          <p style={{ color:T.mid, fontSize:'0.9rem', lineHeight:1.7, margin:0 }}>{v.desc}</p>
        </motion.div>
      ))}
    </div>

    {/* IVACE credential */}
    <motion.div
      className="ivace-badge"
      initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.5 }}
      style={{
        background: T.surface1, border:`1px solid ${T.cyanBorder}`,
        borderRadius:'16px', padding:'2rem 2.5rem',
        display:'flex', alignItems:'center', gap:'2rem', flexWrap:'wrap',
        position:'relative', overflow:'hidden',
      }}
    >
      <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(90deg, transparent, ${T.cyan}, transparent)` }} />
      <div style={{ flexShrink:0, width:'52px', height:'52px', border:`1px solid ${T.cyanBorder}`, borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(0,245,255,0.06)' }}>
        <IconBuilding s={28} c={T.cyan} />
      </div>
      <div style={{ flex:1, minWidth:'220px' }}>
        <div style={{ color:T.low, fontSize:'0.72rem', textTransform:'uppercase', letterSpacing:'1.5px', marginBottom:'0.5rem' }}>Proyecto subvencionado · IVACE</div>
        <h3 style={{ color:T.hi, fontSize:'1.1rem', fontWeight:600, marginBottom:'0.5rem', lineHeight:1.4 }}>
          Visión artificial (VA) en terminales de contenedores
        </h3>
        <p style={{ color:T.mid, fontSize:'0.88rem', lineHeight:1.6, margin:0 }}>
          Proyecto de inclusión de visión artificial en el proceso de estiba y transporte horizontal en terminales de contenedores, financiado por el Institut Valencià de Competitivitat Empresarial.
        </p>
      </div>
      <motion.a
        href="https://b2tech.es/wp-content/uploads/2024/09/SubvencionIVACE-B2Tech23.pdf"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ borderColor: T.cyanBorderHv, color: T.cyan }}
        style={{
          flexShrink:0, color:T.mid, textDecoration:'none',
          border:`1px solid ${T.cyanBorder}`, borderRadius:'100px',
          padding:'0.55rem 1.2rem', fontSize:'0.82rem',
          transition:'all 0.2s',
        }}
      >
        Ver documento →
      </motion.a>
    </motion.div>
  </div>
);

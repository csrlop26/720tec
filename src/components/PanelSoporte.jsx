import { motion } from 'framer-motion';
import { useState } from 'react';
import { T } from '../tokens';
import { Badge, GlowBtn } from './Primitives';

// ── SVG Icons inline ─────────────────────────────────────────────────────────
const IconDownload = ({s=24,c="currentColor",w=1.5}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const IconMonitor = ({s=24,c="currentColor",w=1.5}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <line x1="8" y1="21" x2="16" y2="21"/>
    <line x1="12" y1="17" x2="12" y2="21"/>
  </svg>
);

const IconKey = ({s=24,c="currentColor",w=1.5}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
  </svg>
);

const IconWifi = ({s=24,c="currentColor",w=1.5}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
    <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
    <line x1="12" y1="20" x2="12.01" y2="20"/>
  </svg>
);

const IconCheckCircle = ({s=24,c="currentColor",w=1.5}) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

// ── How it works steps ───────────────────────────────────────────────────────
const steps = [
  { n:'01', title:'Llama o escribe al soporte', desc:'Contacta con nuestro equipo técnico por teléfono o email. Te proporcionaremos un código de sesión único.' },
  { n:'02', title:'Introduce tu código',         desc:'Escribe el código de 6 dígitos que te hemos dado en el campo de conexión ISL de esta página.' },
  { n:'03', title:'Acepta la conexión',           desc:'Un técnico se conectará a tu equipo de forma segura y comenzará a resolver la incidencia.' },
];

// ── Main component ────────────────────────────────────────────────────────────
export const PanelSoporte = () => {
  const [code, setCode]     = useState('');
  const [status, setStatus] = useState('idle'); // idle | connecting | error

  const handleConnect = () => {
    const cleaned = code.replace(/\s/g, '');
    if (cleaned.length < 4) { setStatus('error'); return; }
    setStatus('connecting');
    // ISL Online session URL — opens the client with the session code
    const url = `https://islonline.com/isllight/connect?session=${cleaned}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleConnect();
  };

  return (
    <div className="panel-inner" style={{ maxWidth:'1100px', margin:'0 auto', padding:'5rem 2.5rem 6rem' }}>

      {/* Header */}
      <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
        <Badge>Soporte Técnico</Badge>
        <h1 className="panel-h1" style={{ fontSize:'clamp(2.2rem, 6vw, 3.5rem)', color:T.hi, fontWeight:700, lineHeight:1.1, letterSpacing:'-0.03em', marginBottom:'1.25rem', maxWidth:'700px' }}>
          Asistencia Remota<br/>
          <span style={{ color:T.cyan }}>rápida y segura</span>
        </h1>
        <p style={{ fontSize:'1.05rem', color:T.mid, lineHeight:1.8, maxWidth:'580px', marginBottom:'4rem' }}>
          Nuestro equipo puede acceder a tu equipo de forma segura para resolver cualquier incidencia técnica. Necesitarás el código de sesión que te proporcionamos por teléfono o email.
        </p>
      </motion.div>

      {/* Main grid: download + ISL */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(260px, 1fr))', gap:'1.5rem', marginBottom:'5rem' }}>

        {/* Card 1: Descarga */}
        <motion.div
          initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.15 }}
          style={{
            background:`linear-gradient(145deg, ${T.surface1}, ${T.surface2})`,
            border:`1px solid ${T.cyanBorder}`, borderRadius:'16px', padding:'2.5rem',
            position:'relative', overflow:'hidden',
          }}
        >
          <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:`linear-gradient(90deg, transparent, ${T.cyan}, transparent)` }} />

          <div style={{ width:'52px', height:'52px', border:`1px solid ${T.cyanBorder}`, borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(0,245,255,0.06)', marginBottom:'1.5rem' }}>
            <IconMonitor s={26} c={T.cyan} />
          </div>

          <h2 style={{ color:T.hi, fontSize:'1.3rem', fontWeight:700, letterSpacing:'-0.02em', marginBottom:'0.75rem' }}>
            Soporte Remoto B2Tech
          </h2>
          <p style={{ color:T.mid, fontSize:'0.9rem', lineHeight:1.7, marginBottom:'2rem' }}>
            Descarga el cliente de asistencia remota de B2Tech. Una vez instalado, tu técnico podrá conectarse directamente a tu equipo para resolver la incidencia.
          </p>

          <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
            {['Conexión cifrada end-to-end', 'Sin instalación permanente', 'Solo activo durante la sesión'].map((f, i) => (
              <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.6rem' }}>
                <IconCheckCircle s={16} c={T.cyan} />
                <span style={{ color:T.low, fontSize:'0.82rem', fontFamily:T.fontMono }}>{f}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop:'2rem' }}>
            <motion.a
              href="https://www.b2tech.es/link/b2tech-soporte.exe"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale:1.02, boxShadow:`0 0 32px rgba(0,245,255,0.45)` }}
              whileTap={{ scale:0.97 }}
              style={{
                display:'inline-flex', alignItems:'center', gap:'0.75rem',
                background:'linear-gradient(135deg, #005f8a 0%, #0099cc 50%, #00F5FF 100%)',
                color:'#001820', border:'none', padding:'0.9rem 2rem',
                borderRadius:'8px', fontSize:'0.85rem', fontWeight:700,
                textDecoration:'none', letterSpacing:'0.08em', textTransform:'uppercase',
                cursor:'pointer', fontFamily:T.fontSans,
                boxShadow:'0 0 24px rgba(0,245,255,0.25)',
              }}
            >
              <IconDownload s={18} c="#001820" />
              Descargar Cliente
            </motion.a>
          </div>
        </motion.div>

        {/* Card 2: ISL Code Connection */}
        <motion.div
          initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.25 }}
          style={{
            background:`linear-gradient(145deg, ${T.surface1}, ${T.surface2})`,
            border:`1px solid ${T.cyanBorder}`, borderRadius:'16px', padding:'2.5rem',
            position:'relative', overflow:'hidden',
          }}
        >
          <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:`linear-gradient(90deg, transparent, ${T.cyan}, transparent)` }} />

          <div style={{ width:'52px', height:'52px', border:`1px solid ${T.cyanBorder}`, borderRadius:'12px', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(0,245,255,0.06)', marginBottom:'1.5rem' }}>
            <IconKey s={24} c={T.cyan} />
          </div>

          <h2 style={{ color:T.hi, fontSize:'1.3rem', fontWeight:700, letterSpacing:'-0.02em', marginBottom:'0.75rem' }}>
            Conexión con ISL Online
          </h2>
          <p style={{ color:T.mid, fontSize:'0.9rem', lineHeight:1.7, marginBottom:'2rem' }}>
            Introduce el código de sesión que te ha proporcionado tu técnico de B2Tech y pulsa Conectar para iniciar la sesión remota.
          </p>

          {/* Code input */}
          <div style={{ marginBottom:'1.25rem' }}>
            <label style={{ display:'block', color:T.low, fontSize:'0.68rem', textTransform:'uppercase', letterSpacing:'2px', marginBottom:'0.65rem', fontFamily:T.fontMono }}>
              Código de sesión
            </label>
            <input
              type="text"
              placeholder="Ej: 123 456"
              value={code}
              onChange={e => { setCode(e.target.value); setStatus('idle'); }}
              onKeyDown={handleKeyDown}
              maxLength={10}
              className="glow-input"
              style={{
                width:'100%', padding:'0.9rem 1.25rem',
                background:'rgba(0,0,0,0.3)',
                border:`1px solid ${status === 'error' ? '#ff4466' : T.cyanBorder}`,
                borderRadius:'8px', color:T.hi,
                fontSize:'1.5rem', fontFamily:T.fontMono,
                letterSpacing:'0.3em', textAlign:'center',
                outline:'none', transition:'all 0.2s ease',
              }}
            />
            {status === 'error' && (
              <p style={{ color:'#ff4466', fontSize:'0.78rem', marginTop:'0.5rem', fontFamily:T.fontMono }}>
                Introduce un código válido de al menos 4 dígitos.
              </p>
            )}
          </div>

          <motion.button
            onClick={handleConnect}
            whileHover={{ scale:1.02, boxShadow:`0 0 32px rgba(0,245,255,0.4)` }}
            whileTap={{ scale:0.97 }}
            style={{
              width:'100%', padding:'0.95rem',
              background: status === 'connecting'
                ? 'rgba(0,245,255,0.12)'
                : 'linear-gradient(135deg, #005f8a 0%, #0099cc 50%, #00F5FF 100%)',
              border:`1px solid ${T.cyanBorder}`,
              borderRadius:'8px', color: status === 'connecting' ? T.cyan : '#001820',
              fontSize:'0.88rem', fontWeight:700, letterSpacing:'0.1em',
              textTransform:'uppercase', cursor:'pointer',
              fontFamily:T.fontSans, transition:'all 0.3s ease',
              display:'flex', alignItems:'center', justifyContent:'center', gap:'0.65rem',
            }}
          >
            <IconWifi s={18} c={status === 'connecting' ? T.cyan : '#001820'} />
            {status === 'connecting' ? 'Abriendo sesión...' : 'Conectar Ahora'}
          </motion.button>

          <p style={{ color:T.low, fontSize:'0.75rem', textAlign:'center', marginTop:'1rem', lineHeight:1.6 }}>
            Se abrirá el cliente ISL Online en tu navegador.<br/>El código expira cuando el técnico lo cierra.
          </p>
        </motion.div>
      </div>

      <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4 }}>
        <h2 style={{ display:'flex', alignItems:'center', gap:'1rem', fontSize:'1.4rem', color:T.hi, fontWeight:700, marginBottom:'2.5rem', letterSpacing:'-0.02em' }}>
          <span style={{ width:'24px', height:'1px', background:T.cyan, display:'inline-block' }} />
          ¿Cómo funciona?
          <span style={{ width:'24px', height:'1px', background:T.cyan, display:'inline-block' }} />
        </h2>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'1.25rem' }}>
          {steps.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4 + i*0.1 }}
              style={{
                background:T.surface1, border:`1px solid ${T.cyanBorder}`,
                borderRadius:'12px', padding:'1.75rem', position:'relative', overflow:'hidden',
              }}
            >
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:`linear-gradient(90deg, transparent, ${T.cyan}50, transparent)` }} />
              <div style={{ fontSize:'2.5rem', fontWeight:800, color:'rgba(0,245,255,0.12)', fontFamily:T.fontMono, lineHeight:1, marginBottom:'1rem' }}>{s.n}</div>
              <h3 style={{ color:T.hi, fontSize:'0.95rem', fontWeight:700, marginBottom:'0.6rem', letterSpacing:'-0.01em' }}>{s.title}</h3>
              <p style={{ color:T.mid, fontSize:'0.85rem', lineHeight:1.7, margin:0 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.6 }}
        style={{
          marginTop:'3rem', padding:'1.25rem 1.75rem',
          background:'rgba(0,245,255,0.03)', border:`1px solid ${T.cyanBorder}`,
          borderRadius:'10px', display:'flex', alignItems:'flex-start', gap:'1rem',
        }}
      >
        <IconCheckCircle s={18} c={T.cyan} />
        <p style={{ color:T.low, fontSize:'0.82rem', lineHeight:1.7, margin:0 }}>
          <strong style={{ color:T.mid }}>Conexión 100% segura.</strong> Las sesiones ISL Online están cifradas con TLS 1.3. El técnico solo puede ver y controlar tu equipo con tu permiso explícito. La sesión se cierra automáticamente al terminar.
        </p>
      </motion.div>
    </div>
  );
};

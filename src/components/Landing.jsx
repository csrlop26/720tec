import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { T } from '../tokens';
import { IconCloud, IconCpu, IconRadio, IconBrain, IconShield, IconTarget, IconUsers, IconBuilding, LogoAzure, LogoCisco, LogoSiemens, LogoFortinet, LogoVMware, LogoAWS } from '../icons';
import { GlowBtn } from './Primitives';

// ─── Set a URL to use video background, leave empty for default grid/glow ───
const HERO_VIDEO_URL = '';
// ────────────────────────────────────────────────────────────────────────────

// Video background (only used when HERO_VIDEO_URL is set)
const VideoBg = () => (
  <div style={{ position:'absolute', inset:0, zIndex:1, overflow:'hidden' }}>
    <video src={HERO_VIDEO_URL} autoPlay muted loop playsInline style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
    <div style={{ position:'absolute', inset:0, background:`linear-gradient(to bottom, rgba(10,10,16,0.80) 0%, rgba(10,10,16,0.50) 40%, rgba(10,10,16,1.00) 100%)` }} />
    <div style={{ position:'absolute', inset:0, background:'rgba(10,10,16,0.4)' }} />
  </div>
);

// ── Animated CountUp ────────────────────────────────────────────────────────
const CountUp = ({ target, prefix = '', suffix = '' }) => {
  const ref    = useRef(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      observer.disconnect();
      const num = parseFloat(target);
      const dur = 1600;
      const start = performance.now();
      const animate = (now) => {
        const t = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setVal(Math.round(eased * num));
        if (t < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} style={{ fontFamily: T.fontMono }}>
      {prefix}{val}{suffix}
    </span>
  );
};

// ── Stagger variants ─────────────────────────────────────────────────────────
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const itemLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const itemRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

// ── Section Heading ─────────────────────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <div style={{
    color: T.cyan, fontSize: '0.68rem', textTransform: 'uppercase',
    letterSpacing: '4px', marginBottom: '1.25rem',
    display: 'flex', alignItems: 'center', gap: '0.75rem',
    fontFamily: T.fontMono,
  }}>
    <span style={{ width: '24px', height: '1px', background: T.cyan, display:'inline-block' }} />
    {children}
    <span style={{ width: '24px', height: '1px', background: T.cyan, display:'inline-block' }} />
  </div>
);

// ── Service preview data ─────────────────────────────────────────────────────
const servicesPreview = [
  { id:'servicios', icon:<IconCloud  s={26} c={T.cyan}/>, title:'Cloud & SaaS',      sub:'Computación · Backup/DR · B2Correo · Seguridad' },
  { id:'servicios', icon:<IconCpu    s={26} c={T.cyan}/>, title:'Industrial & IoT',   sub:'WiFi Industrial · Embarcado · Seguridad OT'       },
  { id:'servicios', icon:<IconRadio  s={26} c={T.cyan}/>, title:'Infraestructuras',   sub:'Virtualización · Redes · LTE · Redundancia'       },
  { id:'servicios', icon:<IconBrain  s={26} c={T.cyan}/>, title:'Proyectos IA/Data',  sub:'Sensorización · Analítica · Automatización'       },
];

// ── Differentiators ──────────────────────────────────────────────────────────
const whyUs = [
  { icon:<IconShield s={22} c={T.cyan}/>, title:'Seguridad por diseño', desc:'Ciberseguridad OT/IT convergente integrada desde el primer día del proyecto.' },
  { icon:<IconTarget s={22} c={T.cyan}/>, title:'SLA garantizado',       desc:'99.98% uptime. Respuesta técnica en menos de 24h, sin excepciones.' },
  { icon:<IconUsers  s={22} c={T.cyan}/>, title:'Equipo certificado',    desc:'Ingenieros especializados con más de 12 años de experiencia media.' },
];

// ── Stat data ────────────────────────────────────────────────────────────────
const stats = [
  { num:'12', suffix:'+', label:'Años de experiencia',  accent:true  },
  { num:'200', suffix:'+', label:'Proyectos completados', accent:false },
  { num:'9998', prefix:'', suffix:'%', displayAs:'99.98%', label:'Uptime garantizado', accent:false },
  { num:'6', suffix:'',   label:'Partners certificados', accent:true  },
  { num:'24', prefix:'<', suffix:'h', label:'Respuesta técnica', accent:false },
  { num:'3', suffix:'',   label:'Áreas de servicio',     accent:false },
];

// ── Partners Logos for Marquee ───────────────────────────────────────────────
const partnerLogos = [
  { name: 'Azure', Logo: LogoAzure },
  { name: 'Cisco', Logo: LogoCisco },
  { name: 'Siemens', Logo: LogoSiemens },
  { name: 'Fortinet', Logo: LogoFortinet },
  { name: 'VMware', Logo: LogoVMware },
  { name: 'AWS', Logo: LogoAWS }
];
const marqueeLogos = [...partnerLogos, ...partnerLogos]; // Duplicate for seamless infinite scroll


// ── Marquee Item with Center-Screen Highlight ────────────────────────────────
const MarqueeItem = ({ item }) => {
  const ref = useRef(null);
  const [inCenter, setInCenter] = useState(false);

  useEffect(() => {
    // 0px -38% 0px -38% means the observer area is the middle 24% of the viewport width.
    const observer = new IntersectionObserver(([entry]) => {
      setInCenter(entry.isIntersecting);
    }, {
      root: null,
      rootMargin: "0px -35% 0px -35%",
      threshold: 0
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      display:'flex', alignItems:'center', gap:'0.75rem',
      color: T.low, 
      opacity: inCenter ? 1 : 0.4, 
      transform: inCenter ? 'scale(1.15)' : 'scale(1)',
      filter: inCenter ? 'grayscale(0%) brightness(1.2)' : 'grayscale(100%)',
      transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
    }}>
      <item.Logo s={28} />
      <span style={{ fontSize:'0.9rem', fontWeight:600, fontFamily:T.fontSans, letterSpacing:'0.5px' }}>
        {item.name}
      </span>
    </div>
  );
};

// ────────────────────────────────────────────────────────────────────────────
export const Landing = ({ onNav }) => (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>
    {HERO_VIDEO_URL && <VideoBg />}

    {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <div 
        className="hero-section"
        style={{
        position: 'relative', zIndex: 1,
        maxWidth: '960px', margin: '0 auto',
        padding: '11rem 2rem 6rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center',
      }}>

        {/* Overline badge */}
        <motion.span
          className="hero-badge"
          initial={{ opacity:0, y:-16, scale:0.95 }}
          animate={{ opacity:1, y:0, scale:1 }}
          transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
          style={{
            display:'inline-flex', alignItems:'center', gap:'0.65rem',
            background:'rgba(0,245,255,0.06)', backdropFilter:'blur(10px)',
            border:`1px solid ${T.cyanBorder}`, borderRadius:'4px',
            color:T.cyan, padding:'0.4rem 1.2rem',
            fontSize:'0.68rem', textTransform:'uppercase', letterSpacing:'3.5px',
            marginBottom:'2.5rem', fontFamily:T.fontMono,
            textAlign: 'left', lineHeight: 1.4,
          }}
        >
          <span className="pulse-dot" style={{ width:'6px', height:'6px', borderRadius:'50%', background:T.cyan, flexShrink:0 }} />
          99.98% Uptime Industrial · Castelló de la Plana
        </motion.span>

      {/* Headline — word by word stagger */}
      <motion.div
        variants={container}
        initial="hidden" animate="visible"
        style={{ marginBottom:'2rem' }}
      >
        <h1 style={{
          fontSize:'clamp(3rem, 6.5vw, 6rem)', fontWeight:700,
          lineHeight:1.05, letterSpacing:'-0.04em',
          textShadow:'0 4px 60px rgba(0,0,0,0.5)',
        }}>
          {['Ingeniería', 'Cloud e'].map((word, i) => (
            <motion.span key={i} variants={item}
              style={{ display:'block', color:T.hi }}
            >{word}</motion.span>
          ))}
          <motion.span variants={item}
            className="shimmer-text"
            style={{ display:'block', fontWeight:800 }}
          >
            Industrial Tech
          </motion.span>
          <motion.span variants={item}
            style={{ display:'block', color:T.hi, fontWeight:600, fontSize:'0.75em', marginTop:'0.15em' }}
          >
            de alto rendimiento
          </motion.span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
        transition={{ delay:0.7, duration:0.8 }}
        style={{ fontSize:'1.15rem', color:T.mid, lineHeight:1.8, maxWidth:'600px', margin:'0 auto 3rem' }}
      >
        Transformamos los retos tecnológicos de la industria B2B en infraestructuras cibernéticas seguras, sistemas IoT industriales y soluciones de analítica avanzada.
      </motion.p>

      <motion.div
        className="hero-cta-row"
        initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
        transition={{ delay:0.9, duration:0.6 }}
        style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}
      >
        <GlowBtn onClick={() => onNav('contacto')}>Iniciar consulta técnica</GlowBtn>
        <GlowBtn secondary onClick={() => onNav('servicios')}>Ver servicios →</GlowBtn>
      </motion.div>
    </div>

    {/* ══ PARTNER MARQUEE ═════════════════════════════════════════════════ */}
    <div style={{ position:'relative', zIndex:1, paddingBottom:'7rem' }}>
      <div className="marquee-container" style={{ cursor: 'pointer' }} onClick={() => onNav('socios')}>
        <div className="marquee-content" style={{ display:'flex', gap:'4rem', padding:'1.5rem 0', paddingRight:'4rem' }}>
          {marqueeLogos.map((item, idx) => (
            <MarqueeItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>

    {/* ══ SERVICES PREVIEW ══════════════════════════════════════════════════ */}
    <div className="landing-section-px" style={{ position:'relative', zIndex:1, maxWidth:'1200px', margin:'0 auto', padding:'0 2rem 7rem' }}>
      <motion.div
        variants={container} initial="hidden"
        whileInView="visible" viewport={{ once:true, margin:'-60px'}}
      >
        <motion.div variants={item} style={{ textAlign:'center', marginBottom:'3rem' }}>
          <SectionLabel>Soluciones</SectionLabel>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', color:T.hi, fontWeight:700, letterSpacing:'-0.02em' }}>
            Todo lo que tu industria necesita
          </h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'1.25rem' }}>
          {servicesPreview.map((s, i) => (
            <motion.button key={i} variants={item} onClick={() => onNav(s.id)}
              className="scan-card"
              whileHover={{ y:-6, borderColor:T.cyanBorderHv, boxShadow:`0 16px 48px rgba(0,245,255,0.1)` }}
              style={{
                background:`linear-gradient(135deg, ${T.surface1} 0%, ${T.surface2} 100%)`,
                border:`1px solid ${T.cyanBorder}`,
                borderRadius:'12px', padding:'2rem 1.75rem',
                cursor:'pointer', textAlign:'left', fontFamily:T.fontSans,
                transition:'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                position:'relative', overflow:'hidden',
              }}
            >
              {/* Top accent line */}
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:`linear-gradient(90deg, transparent, ${T.cyan}, transparent)`, opacity:0.6 }} />


              <div style={{ marginBottom:'1.25rem', width:'48px', height:'48px', border:`1px solid ${T.cyanBorder}`, borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(0,245,255,0.05)' }}>{s.icon}</div>
              <div style={{ color:T.hi, fontWeight:700, fontSize:'1rem', letterSpacing:'-0.01em', marginBottom:'0.5rem' }}>{s.title}</div>
              <div style={{ color:T.low, fontSize:'0.78rem', lineHeight:1.6 }}>{s.sub}</div>
              <div style={{ marginTop:'1.25rem', color:T.cyan, fontSize:'0.75rem', fontWeight:600, letterSpacing:'1px', textTransform:'uppercase' }}>Ver detalles →</div>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>

    {/* ══ ABOUT + STATS ═════════════════════════════════════════════════════ */}
    <div className="landing-section-px" style={{ position:'relative', zIndex:1, maxWidth:'1200px', margin:'0 auto', padding:'0 2rem 8rem' }}>
      {/* Horizontal divider */}
      <motion.div
        initial={{ scaleX:0 }} whileInView={{ scaleX:1 }} viewport={{ once:true }}
        transition={{ duration:1.2, ease:[0.22,1,0.36,1] }}
        style={{ width:'100%', height:'1px', background:`linear-gradient(90deg, transparent, ${T.cyanBorder}, transparent)`, marginBottom:'6rem', transformOrigin:'left' }}
      />

      <div className="landing-about-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }}>

        {/* Left: about */}
        <motion.div
          variants={container} initial="hidden"
          whileInView="visible" viewport={{ once:true, margin:'-60px' }}
        >
          <motion.div variants={itemLeft}>
            <SectionLabel>Sobre B2Tech</SectionLabel>
            <h2 style={{ fontSize:'clamp(1.8rem, 3vw, 2.6rem)', color:T.hi, fontWeight:700, lineHeight:1.15, letterSpacing:'-0.03em', marginBottom:'1.5rem' }}>
              Tecnología industrial<br/>
              <span className="shimmer-text">que marca la diferencia</span>
            </h2>
          </motion.div>
          <motion.p variants={itemLeft} style={{ color:T.mid, lineHeight:1.85, marginBottom:'1.25rem', fontSize:'0.95rem' }}>
            Empresa especializada en transformación digital para el sector industrial B2B. Desde Castelló de la Plana, diseñamos, desplegamos y mantenemos infraestructuras cloud, redes industriales y soluciones IoT para empresas que no pueden permitirse fallar.
          </motion.p>
          <motion.p variants={itemLeft} style={{ color:T.mid, lineHeight:1.85, marginBottom:'2.5rem', fontSize:'0.95rem' }}>
            Partners oficiales de Microsoft Azure, Cisco, Siemens, Fortinet, VMware y AWS. El puente entre la planta de producción y la nube.
          </motion.p>
          <motion.div variants={itemLeft}>
            <GlowBtn secondary onClick={() => onNav('nosotros')}>Conoce al equipo →</GlowBtn>
          </motion.div>
        </motion.div>

        {/* Right: stat grid */}
        <motion.div
          variants={container} initial="hidden"
          whileInView="visible" viewport={{ once:true, margin:'-60px' }}
          style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem' }}
        >
          {stats.map((s, i) => (
            <motion.div key={i} variants={itemRight}
              className="stat-card-resp"
              whileHover={{ borderColor:T.cyanBorderHv, background:T.surface2 }}
              style={{
                background:T.surface1, border:`1px solid ${T.cyanBorder}`,
                borderRadius:'12px', padding:'1.5rem',
                borderLeft: s.accent ? `2px solid ${T.cyan}` : `1px solid ${T.cyanBorder}`,
                transition:'all 0.25s ease', position:'relative', overflow:'hidden',
              }}
            >
              {s.accent && <div style={{ position:'absolute', top:0, left:0, bottom:0, width:'2px', background:`linear-gradient(${T.cyan}, transparent)` }} />}
              <div className="stat-number" style={{ fontSize:'4rem', fontWeight: 700, color: '#fff', letterSpacing: '-2px', lineHeight: 1 }}>
                {s.displayAs
                  ? s.displayAs
                  : <CountUp target={s.num} prefix={s.prefix} suffix={s.suffix} />
                }
              </div>
              <div style={{ fontSize:'0.68rem', color:T.low, textTransform:'uppercase', letterSpacing:'1.5px', marginTop:'0.5rem', fontFamily:T.fontMono }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>

    {/* ══ WHY US ════════════════════════════════════════════════════════════ */}
    <div className="landing-section-px" style={{ position:'relative', zIndex:1, maxWidth:'1200px', margin:'0 auto', padding:'0 2rem 8rem' }}>
      <motion.div
        variants={container} initial="hidden"
        whileInView="visible" viewport={{ once:true, margin:'-60px' }}
      >
        <motion.div variants={item} style={{ textAlign:'center', marginBottom:'3.5rem' }}>
          <SectionLabel>Diferenciadores</SectionLabel>
          <h2 style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', color:T.hi, fontWeight:700, letterSpacing:'-0.02em' }}>
            ¿Por qué elegir B2Tech?
          </h2>
        </motion.div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'1.5rem' }}>
          {whyUs.map((w, i) => (
            <motion.div key={i} variants={item}
              className="scan-card"
              whileHover={{ y:-5, borderColor:T.cyanBorderHv }}
              style={{
                display:'flex', gap:'1.5rem',
                background:`linear-gradient(145deg, ${T.surface1}, ${T.surface2})`,
                border:`1px solid ${T.cyanBorder}`,
                borderRadius:'14px', padding:'2rem',
                position:'relative', overflow:'hidden',
                transition:'all 0.3s ease',
              }}
            >
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'1px', background:`linear-gradient(90deg, transparent, ${T.cyan}50, transparent)` }} />
              <div style={{
                flexShrink:0, width:'48px', height:'48px',
                border:`1px solid ${T.cyanBorder}`, borderRadius:'10px',
                display:'flex', alignItems:'center', justifyContent:'center',
                background:'rgba(0,245,255,0.06)',
                boxShadow:`inset 0 0 16px rgba(0,245,255,0.04)`,
              }}>
                {w.icon}
              </div>
              <div>
                <div style={{ color:T.hi, fontWeight:700, marginBottom:'0.6rem', fontSize:'0.95rem', letterSpacing:'-0.01em' }}>{w.title}</div>
                <div style={{ color:T.mid, fontSize:'0.85rem', lineHeight:1.7 }}>{w.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* ══ TECH TAGS ═════════════════════════════════════════════════════════ */}
    <div className="landing-section-px" style={{ position:'relative', zIndex:1, maxWidth:'1200px', margin:'0 auto', padding:'0 2rem 4rem', textAlign:'center' }}>
      <motion.div
        variants={container} initial="hidden"
        whileInView="visible" viewport={{ once:true }}
        style={{ display:'flex', gap:'0.6rem', justifyContent:'center', flexWrap:'wrap' }}
      >
        {['Computación', 'Backup / DR', 'B2Correo', 'Telemetría', 'WiFi Industrial', 'Seguridad OT', 'IoT Embarcado', 'Virtualización', 'Analítica Avanzada', 'Automatización'].map((tag, i) => (
          <motion.span key={i} variants={item}
            whileHover={{ borderColor:T.cyanBorderHv, color:T.cyan, background:'rgba(0,245,255,0.1)' }}
            style={{
              background:'rgba(0,245,255,0.04)', border:`1px solid ${T.cyanBorder}`,
              color:T.low, padding:'0.35rem 1rem', borderRadius:'4px',
              fontSize:'0.72rem', letterSpacing:'1px', backdropFilter:'blur(4px)',
              fontFamily:T.fontMono, cursor:'default', transition:'all 0.2s ease',
            }}
          >{tag}</motion.span>
        ))}
      </motion.div>
    </div>

    {/* ══ IVACE BADGE ═══════════════════════════════════════════════════════ */}
    <div className="landing-section-px" style={{ position:'relative', zIndex:1, textAlign:'center', paddingBottom:'6rem' }}>
      <motion.a
        href="https://b2tech.es/wp-content/uploads/2024/09/SubvencionIVACE-B2Tech23.pdf"
        target="_blank" rel="noopener noreferrer"
        initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
        whileHover={{ y:-3, borderColor:T.cyanBorderHv, boxShadow:`0 8px 32px rgba(0,245,255,0.12)` }}
        className="animated-border ivace-badge"
        style={{
          display:'inline-flex', alignItems:'center', gap:'1rem',
          background:T.surface1, backdropFilter:'blur(12px)',
          borderRadius:'10px', padding:'1rem 1.75rem',
          textDecoration:'none', transition:'all 0.3s ease',
        }}
      >
        <div style={{ width:'36px', height:'36px', border:`1px solid ${T.cyanBorder}`, borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(0,245,255,0.06)', flexShrink:0 }}>
          <IconBuilding s={20} c={T.cyan} />
        </div>
        <div style={{ textAlign:'left' }}>
          <div style={{ color:T.hi, fontSize:'0.82rem', fontWeight:600, letterSpacing:'-0.01em' }}>Proyecto subvencionado por IVACE</div>
          <div style={{ color:T.low, fontSize:'0.72rem', marginTop:'0.2rem', fontFamily:T.fontMono }}>Visión artificial · Terminales de contenedores</div>
        </div>
        <div style={{ marginLeft:'0.5rem', color:T.cyan, fontSize:'0.75rem', fontWeight:700, letterSpacing:'1px' }}>→</div>
      </motion.a>
    </div>
  </div>
);
